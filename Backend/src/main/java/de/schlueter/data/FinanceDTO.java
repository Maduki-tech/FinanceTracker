package de.schlueter.data;

import lombok.Data;

/**
 * FinanceDTO
 */
@Data
public class FinanceDTO {
    private String id;
    private String name;
    private String description;
    private String amount;
    private String currency;
    private String date;
}
