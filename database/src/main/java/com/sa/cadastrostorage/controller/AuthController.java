package com.sa.cadastrostorage.controller;
import com.sa.cadastrostorage.model.Users;
import com.sa.cadastrostorage.repository.UsersRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthController {

 private final UsersRepository usuarioRepository;

 @Autowired
 public AuthController(UsersRepository usuarioRepository) {
 this.usuarioRepository = usuarioRepository;
 }

 @PostMapping("/login")
 public String login(@RequestBody Users usuario) {
 List<Users> usuarios = usuarioRepository.findAll();
 for (Users u : usuarios) {
 if (u.getName_user().equals(usuario.getName_user()) && u.getPassword_user().equals(usuario.getPassword_user())) {
 return "/home";
 }
 }
 return "/";
 }
}
