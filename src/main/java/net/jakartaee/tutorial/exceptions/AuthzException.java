package net.jakartaee.tutorial.exceptions;

public class AuthzException extends Exception {
	private static final long serialVersionUID = 1L;

	public AuthzException() {
		super();
	}

	public AuthzException(String arg0, Throwable arg1) {
		super(arg0, arg1);
	}

	public AuthzException(String message) {
		super(message);
	}
	
	

}
