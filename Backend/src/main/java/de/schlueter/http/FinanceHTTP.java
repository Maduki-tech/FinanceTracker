package de.schlueter.http;

import de.schlueter.Repository;
import de.schlueter.data.FinanceDTO;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Finance
 */
@RestController
@RequestMapping("/finance")
public class FinanceHTTP {
    @Autowired private Repository financeRepository;

    @GetMapping("")
    public List<FinanceDTO> getAllFinance() {
        return financeRepository.findAll();
    }

    @GetMapping("/{id}")
    public FinanceDTO getFinance(@PathVariable String id) {
        return financeRepository.findById(Integer.parseInt(id)).get();
    }

    @PostMapping("/create")
    public String postFinance(@RequestBody FinanceDTO financeDTO) {
        try {
            financeRepository.save(financeDTO);
            return "Finance saved";
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}
