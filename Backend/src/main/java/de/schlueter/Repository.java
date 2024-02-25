package de.schlueter;

import org.springframework.data.jpa.repository.JpaRepository;

import de.schlueter.data.FinanceDTO;

/**
 * Repository
 */
public interface Repository extends JpaRepository<FinanceDTO, Integer> {}
