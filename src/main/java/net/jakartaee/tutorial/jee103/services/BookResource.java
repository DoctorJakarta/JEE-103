package net.jakartaee.tutorial.jee103.services;

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



@Path("book")
public class BookResource {


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getBooks() {
 		try {
			List<Book> books = new BookDAO().getBooks();
	        return Response.ok(books, MediaType.APPLICATION_JSON).build();
		} catch (DatabaseException e) {
			e.printStackTrace();
			return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
		}
    }

    @GET
    @Path("{bookId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getTagById( @PathParam("bookId") Long id) {				// Book has bookID as Long to handle SQL  NULL
		try {
			Book book = new BookDAO().getBookById(id);
	        return Response.ok(book, MediaType.APPLICATION_JSON).build();
		} catch (NotFoundException e) {
			return Response.status(Response.Status.NOT_FOUND).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
		} catch (DatabaseException e) {
			e.printStackTrace();
			return Response.status(Response.Status.BAD_REQUEST).type(MediaType.APPLICATION_JSON).entity(e.getErrorResponse()).build();
		}
    }   

      
    
}
