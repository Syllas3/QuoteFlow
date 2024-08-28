package com.workspacepi.backend.controller;


import com.workspacepi.backend.solicitacao.SolicitacaoRepository;
import com.workspacepi.backend.solicitacao.SolicitacaoRequestDTO;
import com.workspacepi.backend.solicitacao.SolicitacaoResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// Esta anotação indica que a classe é um controlador REST, que lida com requisições HTTP e retorna dados diretamente no corpo da resposta (em formato JSON, por exemplo).
@RequestMapping("solicitacao") // Define a URL base "solicitacao" para os endpoints dentro deste controlador. Todas as URLs deste controlador começam com "/solicitacao".
public class SolicitacaoController {

    @Autowired
    // Esta anotação permite que o Spring injete automaticamente a dependência do ReciboRepository na classe. Isso facilita o acesso ao banco de dados.
    private SolicitacaoRepository solicitacaoRepository;

    // Método para salvar um recibo
    @PostMapping
    // Mapeia requisições HTTP POST para este método. Quando alguém envia dados para a URL "/solicitacao" usando POST, este método é chamado.
    public void enviarsolicitacao(@RequestBody SolicitacaoRequestDTO data) {
        // O corpo da requisição é convertido para um objeto ReciboRequestDTO.
        // Este método deve salvar a solicitacao no banco de dados, mas ainda precisa ser implementado.
    }

    // Método para obter todas as solicitacoes
    @GetMapping
    // Mapeia requisições HTTP GET para este método. Quando alguém acessa a URL "/solicitacao" usando GET, este método é chamado.
    public List<SolicitacaoResponseDTO> getAll() {
        // O método chama o repositório para buscar todas as solicitacoes no banco de dados.
        // Cada solicitacao é convertida para um objeto SolicitacaoResponseDTO, que é usado para transferir dados entre o servidor e o cliente.
        List<SolicitacaoResponseDTO> solicitacoesList = solicitacaoRepository.findAll() // Chama o método findAll() para buscar todas as solicitacoes.
                .stream() // Converte a lista de solicitacoes em um fluxo (stream) para processá-los.
                .map(SolicitacaoResponseDTO::new) // Para cada solicitacao, cria um novo SolicitacaoResponseDTO.
                .toList(); // Converte o fluxo de volta para uma lista.
        return solicitacoesList; // Retorna a lista de solicitacoes processada.
    }
}
