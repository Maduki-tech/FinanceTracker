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
        financeDTO = new FinanceDTO();
        financeDTO.setId("1");
        financeDTO.setName("Finance 1");
        financeDTO.setDescription("Description 1");
        financeDTO.setAmount("1000");
        financeDTO.setCurrency("EUR");
        financeDTO.setDate("2020-01-01");
    }

    @Test
    public void testGetFinance() throws Exception {
        mockMvc.perform(get("/finance/1"))
            .andExpect(status().isOk())
            .andExpect(content().string(financeDTO.toString()));
    }
}
