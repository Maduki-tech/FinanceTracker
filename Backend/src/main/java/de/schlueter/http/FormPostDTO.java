package de.schlueter.http;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Data
@AllArgsConstructor
public class FormPostDTO {
    private String Name;
    private String Money;
    private String Category;
}
