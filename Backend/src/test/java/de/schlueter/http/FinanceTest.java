package de.schlueter.http;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import de.schlueter.data.FinanceDTO;

/**
 * FinanceTest
 */
@SpringBootTest
@AutoConfigureMockMvc
public class FinanceTest {
    FinanceDTO financeDTO;
    @Autowired MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
    }

    @Test
    public void testGetFinance() throws Exception {
    }
}
