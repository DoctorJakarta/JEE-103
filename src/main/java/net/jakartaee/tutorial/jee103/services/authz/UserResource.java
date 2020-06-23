package net.jakartaee.tutorial.jee103.services.authz;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import net.jakartaee.tutorial.auth.PasswordHandler;
import net.jakartaee.tutorial.data.UserDAO;
import net.jakartaee.tutorial.exceptions.DatabaseException;
import net.jakartaee.tutorial.exceptions.NotFoundException;
import net.jakartaee.tutorial.model.User;
import net.jakartaee.tutorial.model.UserDB;



@Path("authz/user")
public class UserResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUsers() {
 		try {
			List<UserDB> users = new UserDAO().getUsers();
	        return Response.ok(users, MediaType.APPLICATION_JSON).build();
		} catch (DatabaseException e) {
			e.printStackTrace();
			return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
		}
    }

    @GET
    @Path("{userId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUserById( @PathParam("userId") Integer id) {				// User has userID WOULD REQUIRE Long to handle SQL  NULL
		try {
			User user = new UserDAO().getUserById(id);
	        return Response.ok(user, MediaType.APPLICATION_JSON).build();
		} catch (NotFoundException e) {
			return Response.status(Response.Status.NOT_FOUND).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
		} catch (DatabaseException e) {
			e.printStackTrace();
			return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
		}
    }  
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response addUser(UserDB user) {
    	try {
     		PasswordHandler pwh = new PasswordHandler();
    		UserDB saveUser = new UserDB(user.getUsername(), pwh.getSalt(), pwh.getPasswordHash(user.getPassword()), user.getRole());
			new UserDAO().insertUser(saveUser);
			User returnUser = new User(saveUser);
			return Response.ok(returnUser, MediaType.APPLICATION_JSON).build();			// Return minimal User, not UserDB that includes salt/hash
		} catch (DatabaseException e) {
			e.printStackTrace();
			return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
		}
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateUser(UserDB user) {
    	try {
			new UserDAO().updateUser(user);
			return Response.ok(user, MediaType.APPLICATION_JSON).build();
		} catch (DatabaseException e) {
			e.printStackTrace();
			return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
		}
    }
    
    @DELETE
    @Path("{userId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteUserById( @PathParam("userId") Integer id) {
		try {
			new UserDAO().deleteUser(id);
	        return Response.ok(null, MediaType.APPLICATION_JSON).build();
		} catch (DatabaseException e) {
			e.printStackTrace();
			return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
		}
    }   
    
}
