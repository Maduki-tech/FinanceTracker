package de.schlueter.http;

import de.schlueter.data.FinanceDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Finance
 */
@RestController
@RequestMapping("/finance")
public class FinanceHTTP {
    FinanceDao financeDao;

    public FinanceHTTP(FinanceImpl financeDao) {
        this.financeDao = financeDao;
    }

    @GetMapping("/")
    public FinanceDTO getFinance() {
        financeDao.findAll();
        return null;
    }

    @GetMapping("/{id}")
    public String getFinance(@PathVariable String id) {
        return financeDao.read(id).toString();
    }

    @PostMapping("/{id}")
    public String postFinance(@PathVariable FinanceDTO financeDTO) {
        return financeDao.create(financeDTO).toString();
    }
}
