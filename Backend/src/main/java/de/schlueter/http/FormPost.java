package de.schlueter.http;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

/**
 * FormPost
 */
@Slf4j
@RestController
public class FormPost {
    @RequestMapping(value = "/form", method = RequestMethod.POST)
    public String formPost(@RequestBody FormPostDTO body) {
        log.info(body.getName());
        return "{\"status\": \"ok\"}";
    }
}
