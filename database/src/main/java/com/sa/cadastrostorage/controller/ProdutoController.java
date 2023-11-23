package com.sa.cadastrostorage.controller;
import com.sa.cadastrostorage.model.Produto;
import com.sa.cadastrostorage.repository.ProdutoRepository;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.hibernate.grammars.hql.HqlParser;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
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
        Calendar c = Calendar.getInstance();
        produto.setDat_cadastro(c);
        return ProdutoRepository.save(produto);
    }

}
