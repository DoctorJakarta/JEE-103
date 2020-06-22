package net.jakartaee.tutorial.auth;

import java.util.Set;

import net.jakartaee.tutorial.exceptions.AuthzException;

public final class AuthUtil { private AuthUtil() {}			// Util has private constructor
	
	public static void checkAuthIds(Set<String> idSet, int id) throws AuthzException {
		if ( !idSet.contains("0") && !idSet.contains(id+"")) {
			System.out.println("NNNNNNNNNNot authorized for ("+id+")in set: " + idSet);
			throw new AuthzException("Not authorized for this product.");
		}
	}
}
