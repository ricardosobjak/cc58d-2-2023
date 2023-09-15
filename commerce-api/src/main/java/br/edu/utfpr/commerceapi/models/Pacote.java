package br.edu.utfpr.commerceapi.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Pacote extends BaseEntity {

    //atributs...

    //@OneToMany(fetch = FetchType.LAZY, mappedBy = "pacote")
    //private List<Reserva> reservas = new ArrayList<>();
}
