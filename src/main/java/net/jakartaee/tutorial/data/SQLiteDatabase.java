package net.jakartaee.tutorial.data;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

import org.sqlite.SQLiteConfig;
import org.sqlite.SQLiteDataSource;

import net.jakartaee.tutorial.auth.PasswordHandler;
import net.jakartaee.tutorial.exceptions.DatabaseException;
import net.jakartaee.tutorial.exceptions.DatabaseExistsException;
import net.jakartaee.tutorial.model.Book;
import net.jakartaee.tutorial.model.UserDB;
import net.jakartaee.tutorial.model.User.ROLE;

public final class SQLiteDatabase {
	
	public static final String DB_PATH = "/opt/apps/data/jee103-tutorial.sqlite";				

	
	private SQLiteDatabase() {}		// Ensure this singleton database Helper is not instantiated.  
	
									// Don't use DriveManager, use DataSource. See: https://stackoverflow.com/questions/41230234/using-datasource-to-connect-to-sqlite-with-xerial-sqlite-jdbc-driver
    private static SQLiteDataSource dataSource;
    static {
		SQLiteConfig  config = new SQLiteConfig();
		config.enforceForeignKeys(true);
    	dataSource = new SQLiteDataSource();
    	dataSource.setUrl("jdbc:sqlite:" + DB_PATH);
    	dataSource.setConfig(config);
    }
 
    public static Connection getConnection() {
        try {
			return dataSource.getConnection();
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
    }
    
	public static void createDatabase() throws DatabaseExistsException, DatabaseException {
		try (	
				Connection conn = getConnection();
				Statement statement = conn.createStatement();		) {   
			statement.execute(Book.SQL_CREATE_BOOK_TABLE);
			statement.execute(UserDB.SQL_CREATE_USER_TABLE);
			System.out.println("Creating database: "+ DB_PATH);
			addSampleData();
		} catch (SQLException e1) {
			System.out.println("Using existing database: " + DB_PATH);
			throw new DatabaseExistsException("SQLite Database already exists.");
		}
	}
	
	private static void addSampleData() throws DatabaseException {
		Book book = new Book("Nineteen Eighty-Four", "George Orwell", 1948);
		new BookDAO().insertBook(book);
		
 		PasswordHandler pwh = new PasswordHandler();
		UserDB user = new UserDB("Admin", pwh.getSalt(), pwh.getPasswordHash("Welcome1"), ROLE.ADMIN);
		new UserDAO().insertUser(user);
	}
}
