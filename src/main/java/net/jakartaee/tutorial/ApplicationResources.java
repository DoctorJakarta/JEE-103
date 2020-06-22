package net.jakartaee.tutorial;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Context;

import org.glassfish.jersey.server.ResourceConfig;

import net.jakartaee.tutorial.auth.JwtHandler;
import net.jakartaee.tutorial.data.SQLiteDatabase;
import net.jakartaee.tutorial.exceptions.DatabaseException;
import net.jakartaee.tutorial.exceptions.DatabaseExistsException;

@ApplicationPath("api")
public class ApplicationResources extends ResourceConfig {

    public static final String JWT_HANDLER_ATTR = "JwtHandler";

	public ApplicationResources(@Context ServletContext servletContext) {
		System.out.println("Application init.");
		
		try {
			SQLiteDatabase.createDatabase();
			System.out.println("Creating JEE Tutorial database: "+SQLiteDatabase.DB_PATH);
		} catch (DatabaseExistsException e) {
			System.out.println("Opening JEE Tutorial database: "+SQLiteDatabase.DB_PATH);
		} catch (DatabaseException e) {
			System.out.println("Error Creating JEE Tutorial database: "+SQLiteDatabase.DB_PATH);
		}
		
		try {
			JwtHandler jwth = new JwtHandler();
			servletContext.setAttribute(JWT_HANDLER_ATTR, jwth);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
	}

	
}
