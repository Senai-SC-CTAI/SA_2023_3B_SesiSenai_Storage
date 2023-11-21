package com.sa.cadastrostorage.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cod_produto;
    private String nome_produto;
    private String status_produto;
    private Long salas_id_salas;
    private Long users_id_users;
}
