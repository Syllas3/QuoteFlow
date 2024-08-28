package com.workspacepi.backend.solicitacao;

// Importa as classes necessárias para definir a entidade e as colunas no banco de dados
import java.util.Date;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "solicitacao") // Define que esta classe será mapeada para uma tabela chamada "solicitacao" no banco de dados
@Entity(name = "solicitacao") // Indica que esta classe é uma entidade JPA, ou seja, um modelo que será persistido no banco de dados
@Getter // Gera automaticamente os métodos getters para todos os campos da classe
@NoArgsConstructor // Gera um construtor sem argumentos
@AllArgsConstructor // Gera um construtor com argumentos para todos os campos
@EqualsAndHashCode(of = "id") // Gera os métodos equals() e hashCode() considerando apenas o campo "id"
public class Solicitacao {

    @Id // Indica que o campo "id" é a chave primária da tabela
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Define que o valor do "id" será gerado automaticamente pelo banco de dados usando a estratégia de identidade
    private Long id; // Campo para armazenar o identificador único da solicitacao

    private String cpf; // Campo para armazenar o CPF do favorecido
    private Date data; // Campo para armazenar a data da solicitacao
    private String destinado; // Campo para armazenar o nome do destinado (pessoa que recebe a solicitacao) será usado para trabalhar com os e-mails
}
