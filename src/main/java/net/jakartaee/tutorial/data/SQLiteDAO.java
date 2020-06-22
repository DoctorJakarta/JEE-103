package net.jakartaee.tutorial.data;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import net.jakartaee.tutorial.exceptions.DatabaseException;

public class SQLiteDAO {
	
	public static String createJeeDatabase(String filename) throws IOException {
		File file = File.createTempFile(filename, null);
	    System.out.println("Created File: " + file.getAbsolutePath());
		return file.getAbsolutePath();
	}
	
	
	protected int getNewId(Connection conn) throws DatabaseException {
		String sql = "SELECT last_insert_rowid()";
		int newId = 0;
		try (   Statement stmt = conn.createStatement();
				ResultSet rs = stmt.executeQuery(sql); ){
			while ( rs.next() ) {
				newId = rs.getInt(1);
			}
			return newId;
		} catch (SQLException e) {
			throw new DatabaseException("Get last insert id failed", e);
		}
	}
}
