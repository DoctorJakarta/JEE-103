package net.jakartaee.tutorial.jee103.services.auth;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import net.jakartaee.tutorial.auth.JwtHandler;
import net.jakartaee.tutorial.auth.PasswordHandler;
import net.jakartaee.tutorial.data.BookDAO;
import net.jakartaee.tutorial.data.UserDAO;
import net.jakartaee.tutorial.exceptions.AuthnException;
import net.jakartaee.tutorial.exceptions.DatabaseException;
import net.jakartaee.tutorial.exceptions.NotFoundException;
import net.jakartaee.tutorial.model.Book;
import net.jakartaee.tutorial.model.ErrorResponse;
import net.jakartaee.tutorial.model.User;

@Path("/auth/")
public class LoginResource {
	@Context
	private HttpServletRequest req;
	
    @POST
    @Path("login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(User user) {
 		
     	try {
     		User dbUser = new UserDAO().getUserByUsername(user.getUsername());
     		PasswordHandler pwh = new PasswordHandler(dbUser.getPwdsalt());			// Create PasswordHandler with the saved (dbUser)  SALT
     		pwh.checkPassword(dbUser.getPwdhash(), user.getPassword());
     	   	String jwtAccess = "test";
    		req.setAttribute(JwtHandler.JWT_ACCESS_HEADER, jwtAccess);
			return Response.ok(null, MediaType.APPLICATION_JSON).build();
		} catch (NotFoundException nfe) {
			ErrorResponse response = new ErrorResponse("Access denied.", "Credentials do not match any authorized users.", 409);
			return Response.status(Response.Status.CONFLICT).type(MediaType.APPLICATION_JSON).entity(response).build();	
		} catch (AuthnException ae) {
			ErrorResponse response = new ErrorResponse("Access denied.", "Credentials do not match any authorized users.", 409);
			return Response.status(Response.Status.CONFLICT).type(MediaType.APPLICATION_JSON).entity(response).build();			
		} catch (Exception e) {
			e.printStackTrace();
			//return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
			return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(e.getMessage()).build();
		}

    }

}
