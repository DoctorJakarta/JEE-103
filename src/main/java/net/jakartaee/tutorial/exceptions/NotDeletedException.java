package net.jakartaee.tutorial.exceptions;

import net.jakartaee.tutorial.model.ErrorResponse;

public class NotDeletedException extends DatabaseException {
	private static final long serialVersionUID = 1L;


	public NotDeletedException(String message) {
		super(message);
	}
	
	public NotDeletedException(String message, Throwable cause) {
		super(message, cause);
	}


}
