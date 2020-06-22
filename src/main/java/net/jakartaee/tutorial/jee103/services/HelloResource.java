package net.jakartaee.tutorial.jee103.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import net.jakartaee.tutorial.model.Greeting;

@Path("hello")
public class HelloResource {

    @GET
    @Path("/text")
    @Produces(MediaType.TEXT_HTML)
    public Response getText() {
        return Response.ok("Hello", MediaType.TEXT_HTML).build();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getJSON() {
    	Greeting greeting = new Greeting("Hello", "Mr. Tibbs");
        return Response.ok(greeting, MediaType.APPLICATION_JSON).build();
    }
    
}