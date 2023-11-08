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
    private Long dat_cadastro;
    private String nome_produto;
    private String status_produto;
    
    @ManyToOne
    private Users users;
    
    @ManyToOne
    private Salas salas;


}
