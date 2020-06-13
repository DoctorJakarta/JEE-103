package net.jakartaee.tutorials.jee103;

import net.jakartaee.tutorials.jee103.model.Greeting;
import net.jakartaee.tutorials.jee103.model.Greeting.TYPE;

public class Main {

	public static void main(String[] args) {
		System.out.println("Got Greeting?");
		System.out.println( new Greeting ("Charlie", TYPE.HELLO));
	}

}
