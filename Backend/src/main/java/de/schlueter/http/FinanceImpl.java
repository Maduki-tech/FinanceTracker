package de.schlueter.http;

import org.springframework.stereotype.Component;

import de.schlueter.data.FinanceDTO;

/**
 * FinanceImpl
 */
@Component
public class FinanceImpl implements FinanceDao {
    @Override
    public FinanceDTO create(FinanceDTO t) {
        FinanceDTO financeDTO = new FinanceDTO();
        financeDTO.setId(t.getId());
        financeDTO.setName(t.getName());
        financeDTO.setDescription(t.getDescription());
        financeDTO.setAmount(t.getAmount());
        financeDTO.setCurrency(t.getCurrency());
        financeDTO.setDate(t.getDate());
        return financeDTO;
    }

    @Override
    public FinanceDTO read(String id) {
        FinanceDTO financeDTO = new FinanceDTO();
        financeDTO.setId(id);
        financeDTO.setName("Finance " + id);
        financeDTO.setDescription("Description " + id);
        financeDTO.setAmount("1000");
        financeDTO.setCurrency("EUR");
        financeDTO.setDate("2020-01-01");
        return financeDTO;
    }

    @Override
    public FinanceDTO update(FinanceDTO t) {
        t.setName("Updated " + t.getName());
        return t;
    }

    @Override
    public void delete(String id) {
        FinanceDTO financeDTO = new FinanceDTO();
        financeDTO.setId(id);
        financeDTO.setName("Finance " + id);
        financeDTO.setDescription("Description " + id);
        financeDTO.setAmount("1000");
        financeDTO.setCurrency("EUR");
        financeDTO.setDate("2020-01-01");
        System.out.println("Deleted " + financeDTO);
    }

    @Override
    public void findAll() {
        FinanceDTO financeDTO = new FinanceDTO();
        financeDTO.setId("1");
        financeDTO.setName("Finance 1");
        financeDTO.setDescription("Description 1");
        financeDTO.setAmount("1000");
        financeDTO.setCurrency("EUR");
        financeDTO.setDate("2020-01-01");
        System.out.println("Found " + financeDTO);
    }
}
