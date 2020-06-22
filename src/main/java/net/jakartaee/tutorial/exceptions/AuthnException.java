package net.jakartaee.tutorial.exceptions;

public class AuthnException extends Exception {

	public AuthnException(String arg0, Throwable arg1) {
		super(arg0, arg1);
	}

	public AuthnException(String arg0) {
		super(arg0);
	}

}
