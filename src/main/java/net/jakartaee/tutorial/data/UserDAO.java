package net.jakartaee.tutorial.data;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


import net.jakartaee.tutorial.exceptions.DatabaseException;
import net.jakartaee.tutorial.exceptions.NotDeletedException;
import net.jakartaee.tutorial.exceptions.NotFoundException;
import net.jakartaee.tutorial.model.User;



public class UserDAO extends SQLiteDAO{
	private static final String SQL_GET_ALL_USERS = "SELECT * FROM user";

	private static final String SQL_GET_USER_BY_ID = "SELECT * FROM user WHERE userId=?";
	private static final String SQL_GET_USER_BY_USERNAME = "SELECT * FROM user WHERE username=?";

	private static final String SQL_INSERT_USER = "INSERT INTO user"  + User.SQL_INSERT_FIELDS + User.SQL_INSERT_VALUES;
	private static final String SQL_UPDATE_USER = "UPDATE user SET "  + User.SQL_UPDATE_FIELDS + " WHERE userId=?";
	private static final String SQL_DELETE_USER = "DELETE FROM user WHERE userId=?";
	
	public List<User> getUsers() throws DatabaseException{
		List<User> users = new ArrayList<>();
		try(
				Connection conn = SQLiteDatabase.getConnection();
				PreparedStatement getPS = conn.prepareStatement(SQL_GET_ALL_USERS);){
		
			ResultSet rs = getPS.executeQuery();
			while (rs.next()) {
				users.add(new User(rs));
			}
		} catch (SQLException e) {
			throw new DatabaseException("getUsers was not successful.",e);
		}
		return users;
	}
	
	public User getUserById(Integer id) throws NotFoundException, DatabaseException{
		User user = null;
		try(
				Connection conn = SQLiteDatabase.getConnection();
				PreparedStatement getPS = conn.prepareStatement(SQL_GET_USER_BY_ID);){
			//getPS.setLong( 	1, id);
			getPS.setInt( 	1, id);
		
			ResultSet rs = getPS.executeQuery();
			if (!rs.next()) {
				throw new NotFoundException("User not found for id: " + id);
			}
			else {
				user = new User(rs);		
			}
		} catch (SQLException e) {
			throw new DatabaseException("getTagById was not successful.",e);
		}
		return user;
	}
	
	public User getUserByUsername(String username) throws NotFoundException, DatabaseException{
		User user = null;
		try(
				Connection conn = SQLiteDatabase.getConnection();
				PreparedStatement getPS = conn.prepareStatement(SQL_GET_USER_BY_USERNAME);){
			getPS.setString( 	1, username);
		
			ResultSet rs = getPS.executeQuery();
			if (!rs.next()) {
				throw new NotFoundException("User not found for username: " + username);
			}
			else {
				user = new User(rs);		
			}
		} catch (SQLException e) {
			throw new DatabaseException("getTagById was not successful.",e);
		}
		System.out.println("Got dbUser with password: "+user.getPassword());
		return user;
	}
	
	public void insertUser(User u) throws DatabaseException{
		try(
				Connection conn = SQLiteDatabase.getConnection();
				PreparedStatement insertPS = conn.prepareStatement(SQL_INSERT_USER);){
			insertPS.setString( 1, u.getUsername());
			insertPS.setString( 2, u.getPwdsalt());
			insertPS.setString( 3, u.getPwdhash());
			insertPS.setString( 4, u.getRole().name());

			int numRows = insertPS.executeUpdate();
			
			//int newId = getNewId(conn);
			//return newId;

		} catch (SQLException e) {
			e.printStackTrace();
			throw new DatabaseException("Insert User was not successful.",e);
		}
	}
	
	public void updateUser(User u) throws DatabaseException{
		try(
				Connection conn = SQLiteDatabase.getConnection();
				PreparedStatement insertPS = conn.prepareStatement(SQL_UPDATE_USER);){
		
			insertPS.setString( 1, u.getUsername());
			insertPS.setString( 2, u.getRole().name());
			
			insertPS.setInt( 	3, u.getId());
			int success = insertPS.executeUpdate();

		} catch (SQLException e) {
			throw new DatabaseException("Update User was not successful.",e);
		}
	}
	
	public void deleteUser(Integer id) throws NotDeletedException, DatabaseException {
		try(
				Connection conn = SQLiteDatabase.getConnection();
				PreparedStatement delPS = conn.prepareStatement(SQL_DELETE_USER);){
			
			delPS.setInt( 	1, id);
		
			if ( delPS.executeUpdate() == 0 ) {
				throw new NotDeletedException("User not deleted for id: " + id);
			}
		} catch (SQLException e) {
			throw new DatabaseException("Delete Tag was not successful.",e);
		}
	}
	

}
