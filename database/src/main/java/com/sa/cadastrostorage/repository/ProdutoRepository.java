package com.sa.cadastrostorage.repository;
import com.sa.cadastrostorage.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
