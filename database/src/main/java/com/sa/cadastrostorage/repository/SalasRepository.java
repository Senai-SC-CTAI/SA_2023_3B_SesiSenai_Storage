package com.sa.cadastrostorage.repository;
import com.sa.cadastrostorage.model.Salas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface SalasRepository extends JpaRepository<Salas, Long> {
}
