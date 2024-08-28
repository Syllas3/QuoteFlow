package com.workspacepi.backend.solicitacao;

import com.workspacepi.backend.solicitacao.Solicitacao;
import org.springframework.data.jpa.repository.JpaRepository;

// Interface que atua como repositório para a entidade Solicitacao
public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Long> {
    // O JpaRepository já fornece métodos básicos de CRUD (Create, Read, Update, Delete)
    // Não é necessário código adicional para operações simples, como salvar, buscar, atualizar ou deletar.
}
