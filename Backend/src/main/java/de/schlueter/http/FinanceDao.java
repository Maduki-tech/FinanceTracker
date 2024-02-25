package de.schlueter.http;

import org.springframework.stereotype.Component;

import de.schlueter.BaseDao;
import de.schlueter.data.FinanceDTO;

/**
 * FinanceDao
 */
public interface FinanceDao extends BaseDao<FinanceDTO> {

	void findAll();
}
