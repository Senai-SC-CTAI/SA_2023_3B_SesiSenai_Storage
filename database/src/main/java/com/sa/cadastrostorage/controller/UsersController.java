package com.sa.cadastrostorage.controller;

import com.sa.cadastrostorage.model.Users;
import com.sa.cadastrostorage.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping
    public List<Users> listarUsers() {
        return usersRepository.findAll();
    }

    @PostMapping
    public Users criarUsers(@RequestBody Users users) {
        return usersRepository.save(users);
    }

    @DeleteMapping("/{Id_users}")
    public ResponseEntity<String> deletarUsers(@PathVariable Long Id_users) {
        try {
            usersRepository.deleteById(Id_users); // Corrigido para usersRepository
            return ResponseEntity.ok("Usuario deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{Id_users}")
public ResponseEntity<Users> atualizarUsers(@PathVariable Long Id_users, @RequestBody Users usersAtualizado) {
    if (usersRepository.existsById(Id_users)) {
        Users user = usersRepository.findById(Id_users).get();
        user.setId_user(usersAtualizado.getId_user()); // Corrigido para setId_users
        user.setPassword_user(usersAtualizado.getPassword_user()); // Corrigido para setPassword_users
        user.setName_user(usersAtualizado.getName_user()); // Corrigido para setName_users
        user.setEmail_user(usersAtualizado.getEmail_user()); // Corrigido para setEmail_users
        user.setCpf_user(usersAtualizado.getCpf_user()); // Corrigido para setCpf_users

        Users usersAtualizadoBD = usersRepository.save(user);
        return ResponseEntity.ok(usersAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
