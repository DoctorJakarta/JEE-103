package net.jakartaee.tutorial.model;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Book {
	public static final String SQL_CREATE_BOOK_TABLE = "CREATE TABLE book ( bookId INTEGER PRIMARY KEY NOT NULL, title TEXT, author TEXT, year INTEGER)";

	public static final String SQL_INSERT_FIELDS = " (title, author, year) ";
	public static final String SQL_INSERT_VALUES = " VALUES (?,?,?) ";
	public static final String SQL_UPDATE_FIELDS = " title=?, author=?, year=? ";
    
	private int _id;
	private String _title;
	private String _author;
	private Integer _year;

	public Book() {} // This is required for jersey-media-json-jackson binding for the doPost (Book book)

	public Book(ResultSet rs) throws SQLException {
		_id = rs.getInt("bookId");
		_title = rs.getString("title");
		_author = rs.getString("author");
		_year = rs.getInt("year");
	}
	
	public Book(String title, String author, Integer year) {
		_title = title;
		_author = author;
		_year = year;
	}

	//
	// Generated Getters/Setters
	//

	public int getId() {
		return _id;
	}
	public void setId(int id) {
		_id = id;
	}
	public String getTitle() {
		return _title;
	}
	public void setTitle(String title) {
		_title = title;
	}
	public String getAuthor() {
		return _author;
	}
	public void setAuthor(String author) {
		_author = author;
	}
	public Integer getYear() {
		return _year;
	}
	public void setYear(Integer year) {
		_year = year;
	}
}
