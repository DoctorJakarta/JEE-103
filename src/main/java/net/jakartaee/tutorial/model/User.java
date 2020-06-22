package net.jakartaee.tutorial.model;

import java.sql.ResultSet;
import java.sql.SQLException;

import net.jakartaee.tutorial.auth.PasswordHandler;
import net.jakartaee.tutorial.exceptions.AuthnException;

public class User {
	public static final String SQL_CREATE_USER_TABLE = "CREATE TABLE user ( userId INTEGER PRIMARY KEY NOT NULL, username TEXT UNIQUE, pwdsalt TEXT NOT NULL, pwdhash TEXT NOT NULL, role INTEGER)";

	public static final String SQL_INSERT_FIELDS = " (username, pwdsalt, pwdhash, role) ";
	public static final String SQL_INSERT_VALUES = " VALUES (?,?,?,?) ";
	public static final String SQL_UPDATE_FIELDS = " username=?, role=? ";
	public static final String SQL_UPDATE_PASSWORD = " pwdhash=? ";
	
	public static enum ROLE{ADMIN, PUBLIC;
		public static ROLE get(String sRole) {
			for (ROLE role : values()) {
				if (role.name().equals(sRole)) return role;
			}
			System.out.println("Error getting ROLE by value: " + sRole);
			return null;
		}
	
	}
	
	private int _id;
	private String _username;
	private String _pwdsalt;
	private String _pwdhash;
	private String _password;		// This is populated by the JSON binding from the client during login & registration
	private ROLE _role;
	
	public User() {} // This is require dfor jersey meida=json-jackson binding for doPost
	
	public User(String username, String pwdsalt, String pwdhash, ROLE role) {				// Used for inserting new Users
		_username = username;
		_pwdsalt = pwdsalt;
		_pwdhash = pwdhash;
		_role = role;
	}

	public User(ResultSet rs) throws SQLException {
		_id = rs.getInt("userId");
		_username = rs.getString("username");
		_pwdsalt = rs.getString("pwdsalt");
		_pwdhash = rs.getString("pwdhash");
		_role = ROLE.get(rs.getString("role"));
	}

	
	//
	// Getters and Setters
	//
	public int getId() {
		return _id;
	}
	public void setId(int id) {
		_id = id;
	}
	public String getUsername() {
		return _username;
	}
	public void setUsername(String username) {
		_username = username;
	}
	public String getPwdsalt() {
		return _pwdsalt;
	}
	public void setPwdsalt(String pwdsalt) {
		_pwdsalt = pwdsalt;
	}
	public String getPwdhash() {
		return _pwdhash;
	}
	public void setPwdhash(String pwdhash) {
		_pwdhash = pwdhash;
	}
	public String getPassword() {
		return _password;
	}
	public void setPassword(String password) {
		_password = password;
	}
	public ROLE getRole() {
		return _role;
	}
	public void setRole(ROLE role) {
		_role = role;
	}

}
