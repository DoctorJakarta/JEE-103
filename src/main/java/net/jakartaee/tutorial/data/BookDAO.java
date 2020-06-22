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
import net.jakartaee.tutorial.model.Book;



public class BookDAO extends SQLiteDAO{
	private static final String SQL_GET_ALL_BOOKS = "SELECT * FROM book ORDER BY year";

	private static final String SQL_GET_BOOK_BY_ID = "SELECT * FROM book WHERE bookId=?";
	private static final String SQL_INSERT_BOOK = "INSERT INTO book"  + Book.SQL_INSERT_FIELDS + Book.SQL_INSERT_VALUES;
	private static final String SQL_UPDATE_BOOK = "UPDATE book SET "  + Book.SQL_UPDATE_FIELDS + " WHERE bookId=?";
	private static final String SQL_DELETE_BOOK = "DELETE FROM book WHERE bookId=?";
	
	public List<Book> getBooks() throws DatabaseException{
		List<Book> books = new ArrayList<>();
		try(
				Connection conn = SQLiteDatabase.getConnection();
				PreparedStatement getPS = conn.prepareStatement(SQL_GET_ALL_BOOKS);){
		
			ResultSet rs = getPS.executeQuery();
			while (rs.next()) {
				books.add(new Book(rs));
			}
		} catch (SQLException e) {
			throw new DatabaseException("getBooks was not successful.",e);
		}
		return books;
	}
	
	public Book getBookById(Long id) throws NotFoundException, DatabaseException{
		Book book = null;
		try(
				Connection conn = SQLiteDatabase.getConnection();
				PreparedStatement getPS = conn.prepareStatement(SQL_GET_BOOK_BY_ID);){
			getPS.setLong( 	1, id);
		
			ResultSet rs = getPS.executeQuery();
			if (!rs.next()) {
				throw new NotFoundException("Book not found for id: " + id);
			}
			else {
				book = new Book(rs);		
			}
		} catch (SQLException e) {
			throw new DatabaseException("getTagById was not successful.",e);
		}
		return book;
	}
	
	public void insertBook(Book b) throws DatabaseException{
		try(
				Connection conn = SQLiteDatabase.getConnection();
				PreparedStatement insertPS = conn.prepareStatement(SQL_INSERT_BOOK);){
		
			insertPS.setString( 1, b.getTitle());
			insertPS.setString( 2, b.getAuthor());
			insertPS.setInt( 	3, b.getYear());
		
			int numRows = insertPS.executeUpdate();
			//int newId = getNewId(conn);
			//return newId;

		} catch (SQLException e) {
			throw new DatabaseException("Insert Book was not successful.",e);
		}
	}
	
	public void updateBook(Book b) throws DatabaseException{
		try(
				Connection conn = SQLiteDatabase.getConnection();
				PreparedStatement insertPS = conn.prepareStatement(SQL_UPDATE_BOOK);){
		
			insertPS.setString( 1, b.getTitle());
			insertPS.setString( 2, b.getAuthor());
			insertPS.setInt( 	3, b.getYear());
			
			insertPS.setInt( 	4, b.getId());
			int success = insertPS.executeUpdate();

		} catch (SQLException e) {
			throw new DatabaseException("Update Book was not successful.",e);
		}
	}
	
	public void deleteBook(Integer id) throws NotDeletedException, DatabaseException {
		try(
				Connection conn = SQLiteDatabase.getConnection();
				PreparedStatement delPS = conn.prepareStatement(SQL_DELETE_BOOK);){
			
			delPS.setInt( 	1, id);
		
			if ( delPS.executeUpdate() == 0 ) {
				throw new NotDeletedException("Book not deleted for id: " + id);
			}
		} catch (SQLException e) {
			throw new DatabaseException("Delete Tag was not successful.",e);
		}
	}
	

}
