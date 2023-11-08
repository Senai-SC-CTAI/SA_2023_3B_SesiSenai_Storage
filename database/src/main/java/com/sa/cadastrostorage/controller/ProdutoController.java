package com.sa.cadastrostorage.controller;
import com.sa.cadastrostorage.model.Produto;
import com.sa.cadastrostorage.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173/product") // Endereço do front
@RestController

@RequestMapping("/produto")
public class ProdutoController {
    @Autowired
    private ProdutoRepository ProdutoRepository;
    @GetMapping
    public List<Produto> listarProduto() {
        return ProdutoRepository.findAll();
    }
    @PostMapping
    public Produto criarProduto(@RequestBody Produto produto) {
        return ProdutoRepository.save(produto);
    }

}
