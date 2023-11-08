package com.sa.cadastrostorage.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Salas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_salas; 
    private String quant_salas;
    private String nome_salas;
    
}
