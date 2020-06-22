package net.jakartaee.tutorial.auth;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.Provider;

import net.jakartaee.tutorial.ApplicationResources;
import net.jakartaee.tutorial.exceptions.AuthzException;
import net.jakartaee.tutorial.auth.JwtHandler;

//
// By default ALL JaxRS requests are filtered
// Selective filtering can be done with NAME or DYNAMIC binding (https://stackoverflow.com/questions/23641345/jersey-request-filter-only-on-certain-uri)
// But it is simpler for single purpose use to add custom code IN the filter, as shown below
// This places assumptions on the URL PATH syntax for the application 
//

@Provider
public class AuthzFilter implements ContainerRequestFilter, ContainerResponseFilter {
	
    @Context
    private HttpServletRequest req; 		// Necessary to set Request Scope Attr
   
    @Context
    private ServletContext servletContext; 		// Necessary to set Request Scope Attr
    
	private static Set<String> activeUsernames = new HashSet<>();

	// This is the INCOMING Request Filter
	@Override
	public void filter(ContainerRequestContext creq) throws WebApplicationException {
		
		JwtHandler jwth = (JwtHandler) servletContext.getAttribute(ApplicationResources.JWT_HANDLER_ATTR);

		System.out.println("Got Path in filter: " + creq.getUriInfo().getPath());
		
		boolean isMasterData = creq.getUriInfo().getPath().startsWith("master");			// Master data is loaded in main component, before Login occurs in a sub-component
		if (isMasterData)  return;															// No further authZ is necessary for POST/DELETE login or MASTER DATA

		boolean isSwagger = creq.getUriInfo().getPath().startsWith("swagger");			
		if (isSwagger)  return;															// No further authZ is necessary for swagger.json/yaml

		String bearer = getAuthzBearer(creq, jwth);
		//System.out.println("Got NULL("+ (bearer == null ) +") AuthzBearer?: " + bearer);

		req.setAttribute(jwth.BEARER,bearer);				// This is used by refresh and DELETE login

		boolean isLoginLogout = creq.getUriInfo().getPath().startsWith("auth/log");
		if ( isLoginLogout)  return;										// No further authZ is necessary for POST/DELETE login or MASTER DATA

		if (bearer == null ){					// Angular sends in "null" for bearer after it has been deleted
			//System.out.println("Missing JWT for request: " + creq.getUriInfo().getPath());
			throw new WebApplicationException(Status.UNAUTHORIZED);
		}
		
		
		
		boolean isAdmin = creq.getUriInfo().getPath().startsWith("admin");
		String role = null;
		try {
			role = (String) jwth.getClaimString(bearer,jwth.ROLE);
		} catch (AuthzException e) {
			 creq.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("User not authenticated.").build());		
		}
		
		if(isAdmin && !"ADMIN".equals(role)) creq.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("User not authenticated.").build());			
		
		try {
			
			String uid = jwth.getClaimString(bearer, jwth.UID);
			req.setAttribute(jwth.UID, uid);
			
			

			if (jwth.isExpiredAbsolute(bearer)) {
				creq.abortWith(
						Response.status(Response.Status.UNAUTHORIZED).entity("User session has timed out.").build());
			}
		} catch (AuthzException e) {
			// e.printStackTrace();
			// throw new WebApplicationException(Status.UNAUTHORIZED);
			creq.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("User not authenticated.").build());
		}		
	


		
	}


	
	// This is the OUTGOING Response Filter
	@Override
	public void filter(ContainerRequestContext creq, ContainerResponseContext cRes) throws IOException {
		JwtHandler jwth = (JwtHandler) servletContext.getAttribute(ApplicationResources.JWT_HANDLER_ATTR);
		String incomingBearer = getAuthzBearer(creq, jwth);
		String outgoingJwt = (String) req.getAttribute(JwtHandler.JWT_ACCESS_HEADER);
	
	
		if (incomingBearer != null) {			  
			try {
				outgoingJwt = jwth.getUpdatedAccessToken(jwth.JWT_ACCESS_TIMEOUT_MIN, incomingBearer);
		    	System.out.println("Set outgoing bearer: " + outgoingJwt + " from input JWT: " + incomingBearer);
			} catch (AuthzException e) {
		    	System.out.println("Got getUpdatedAccessToken error: " + e.getMessage() + " with bearer: " + incomingBearer);
				// can't abort request at this point
				//creq.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("User access token expired.").build());
			}
		}
		
       	cRes.getHeaders().add(JwtHandler.JWT_ACCESS_HEADER, outgoingJwt);			
       	cRes.getHeaders().add(JwtHandler.TIMEOUT_HEADER, jwth.JWT_ACCESS_TIMEOUT_MIN * 60);	// This is somewhat redundant, but it simplifies the client side Javascript to decode/parse the JWT and reduces JS dependencies		
    }
    
    private String getAuthzBearer(ContainerRequestContext creq, JwtHandler jwth) {
		String authHeader = creq.getHeaderString(jwth.AUTHZ_HEADER);
		if (authHeader == null ) return null;
		String bearer = authHeader.substring(jwth.jstStart);
		//System.out.println("In getAuthzBearer with NULL ("+ ("null".equals(bearer))+") authHeader?: " + bearer);
		if ("null".equals(bearer)) return null;						// Angular may send "null" AuthZ Bearer 
		return bearer;
    }
    
	public static boolean activateUsername(String username) {
		return activeUsernames.add(username);
	}
	public static boolean inactivateUsername(String username) {
		//System.out.println("JWT is contained ( " + validTokens.contains(jwt) + " )  in set:" + jwt );
		//System.out.println("Had ("+validTokens.contains(jwt)+") jwtSet: " + validTokens);
		boolean worked =  activeUsernames.remove(username);
		//System.out.println("Now has ("+worked+")jwtSet: " + validTokens);
		return worked;
	}
}