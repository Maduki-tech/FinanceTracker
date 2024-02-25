package de.schlueter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 * Hello world!
 *
 */
@SpringBootApplication
public class App implements CommandLineRunner {
    @Autowired private JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        String sql =
            "CREATE TABLE IF NOT EXISTS finance(id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, description VARCHAR(100) NOT NULL, amount BIGINT NOT NULL, currency VARCHAR(100) NOT NULL, date DATE NOT NULL)";

        jdbcTemplate.execute(sql);
    }
}
