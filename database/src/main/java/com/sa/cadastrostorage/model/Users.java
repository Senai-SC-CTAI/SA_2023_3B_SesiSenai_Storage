package com.sa.cadastrostorage.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Users {
    @Id
    private Long Id_users;
    private String Name_users;
    private String Email_users;
    private String Password_users;
    private Long Cpf_users;
}



