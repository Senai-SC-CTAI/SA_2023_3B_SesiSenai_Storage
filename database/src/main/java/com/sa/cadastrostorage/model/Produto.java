package com.sa.cadastrostorage.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;
import java.util.Calendar;

@Entity
@Getter
@Setter
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cod_produto;
    private String nome_produto;
    private String status_produto;
    private Calendar dat_cadastro ;
    
    @ManyToOne
    private Salas salas;
    
    @ManyToOne
    private Users users;
}
