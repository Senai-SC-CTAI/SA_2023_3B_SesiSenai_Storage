package com.sa.cadastrostorage.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id_user;
    private String name_user;
    private String email_user;
    private String password_user;
    private String cpf_user;
}



