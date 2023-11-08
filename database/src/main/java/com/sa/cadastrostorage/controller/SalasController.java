package com.sa.cadastrostorage.controller;
import com.sa.cadastrostorage.model.Salas;
import com.sa.cadastrostorage.repository.SalasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173/environments") // Endereço do front
@RestController

@RequestMapping("/salas")
public class SalasController {
 @Autowired
    private SalasRepository SalasRepository;
 @GetMapping
    public List<Salas> listarsalas() {
        return SalasRepository.findAll();
    }
   @PostMapping
    public Salas criarSalas(@RequestBody Salas salas) {
        return SalasRepository.save(salas);
    }

}