package de.schlueter.data;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

/**
 * FinanceDTO
 */
@Entity
@Data
@Table(name = "finance")
public class FinanceDTO {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Integer id;
    private String name;
    private String description;
    private String amount;
    private String currency;
    private Date date;
}
