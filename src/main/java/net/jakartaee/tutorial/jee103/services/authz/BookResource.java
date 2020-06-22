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


import net.jakartaee.tutorial.data.BookDAO;
import net.jakartaee.tutorial.exceptions.DatabaseException;
import net.jakartaee.tutorial.exceptions.NotDeletedException;
import net.jakartaee.tutorial.exceptions.NotFoundException;
import net.jakartaee.tutorial.model.Book;



@Path("authz/book")
public class BookResource {


    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response addBook(Book book) {
    	try {
			new BookDAO().insertBook(book);;
			return Response.ok(null, MediaType.APPLICATION_JSON).build();
		} catch (DatabaseException e) {
			e.printStackTrace();
			return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
		}
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateBook(Book book) {
    	try {
			new BookDAO().updateBook(book);
			return Response.ok(book, MediaType.APPLICATION_JSON).build();
		} catch (DatabaseException e) {
			e.printStackTrace();
			return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
		}
    }
    
    @DELETE
    @Path("{bookId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteBookById( @PathParam("bookId") Integer id) {
		try {
			new BookDAO().deleteBook(id);
	        return Response.ok(null, MediaType.APPLICATION_JSON).build();
		} catch (DatabaseException e) {
			e.printStackTrace();
			return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
		}
    }   
    
}
