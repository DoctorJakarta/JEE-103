package net.jakartaee.tutorials.jee103.model;


public class Greeting {
	public enum TYPE { HELLO, GOODBYE }
	private String _name;
	private TYPE _type;


	public Greeting(String _name, TYPE _type) {
		this._name = _name;
		this._type = _type;
	}

	public String toString() {
		switch( _type ) {
			case HELLO: 
				return "Hello " + _name;
			case GOODBYE: 
				return "Goodbye " + _name;
		}
		return "Whappnen";
	}
	
	
	
}

