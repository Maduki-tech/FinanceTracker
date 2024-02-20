package de.schlueter.http;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import de.schlueter.App;
import org.junit.jupiter.api.Test;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

/**
 * FormPostTest
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK, classes = App.class)
@AutoConfigureMockMvc
public class FormPostTest {
    @Autowired private MockMvc mockMvc;

    @Test
    public void testFormPost() {
        try {
            mockMvc
                .perform(
                    post("/form")
                        .contentType("application/json")
                        .content(
                            "{\"Name\": \"Name\", \"Money\": \"Money\", \"Category\": \"Category\"}"))
                .andExpect(status().isOk());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
