// Arquivo: internal/controllers/auth.go
package controllers

import (
	"database/sql"
	"encoding/json"
	"net/http"
    "strings"

	"loja-bots/internal/models" // Ajuste o nome do módulo se necessário
	"golang.org/x/crypto/bcrypt"
)

// Estrutura que esperamos receber do Front-end
type LoginRequest struct {
	Email string `json:"email"`
	Senha string `json:"senha"`
}

type RegistroRequest struct {
	Nome  string `json:"nome"`
    Email string `json:"email"`
    Senha string `json:"senha"`
}

// Login é a função que processa a rota
func Login(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Define que a resposta será em JSON (A nossa "View")
		w.Header().Set("Content-Type", "application/json")

		// 1. Lê o JSON que veio do front-end
		var req LoginRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			http.Error(w, `{"erro": "Dados inválidos"}`, http.StatusBadRequest)
			return
		}

		// 2. Chama o Model para buscar o usuário no banco
		usuario, err := models.BuscarUsuarioPorEmail(db, req.Email)
		if err != nil {
			http.Error(w, `{"erro": "E-mail ou senha incorretos"}`, http.StatusUnauthorized)
			return
		}

		// 3. Compara a senha digitada com o Hash do banco de dados (Segurança!)
		err = bcrypt.CompareHashAndPassword([]byte(usuario.SenhaHash), []byte(req.Senha))
		if err != nil {
			http.Error(w, `{"erro": "E-mail ou senha incorretos"}`, http.StatusUnauthorized)
			return
		}

		// 4. Se chegou até aqui, o login deu certo! 
		// (No futuro, aqui você geraria um Token JWT)
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(map[string]string{
			"mensagem": "Login realizado com sucesso!",
			"email":    usuario.Email,
		})
	}
}

func Registro(db *sql.DB) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")

        // 1. Lê o JSON do front-end
        var req RegistroRequest
        if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
            http.Error(w, `{"erro": "Dados inválidos no corpo da requisição"}`, http.StatusBadRequest)
            return
        }

        // 2. Validação de Negócio (Sanitização básica)
        if strings.TrimSpace(req.Nome) == "" || strings.TrimSpace(req.Email) == "" {
            http.Error(w, `{"erro": "Nome e e-mail são obrigatórios"}`, http.StatusBadRequest)
            return
        }
        if len(req.Senha) < 6 {
            http.Error(w, `{"erro": "A senha deve ter no mínimo 6 caracteres"}`, http.StatusBadRequest)
            return
        }

        // 3. Regra de Negócio: O e-mail já existe?
        // Aqui reaproveitamos a função que você já usou no Login!
        _, err := models.BuscarUsuarioPorEmail(db, req.Email)
        if err == nil {
            // Se o err for nulo, significa que a busca RETORNOU um usuário.
            // Logo, o e-mail já está em uso. (409 Conflict)
            http.Error(w, `{"erro": "Este e-mail já está cadastrado"}`, http.StatusConflict)
            return
        }

        // 4. Segurança: Criptografar a senha ANTES de mandar para o Model
        // O custo padrão (DefaultCost) é 10, o que é um bom equilíbrio entre segurança e performance.
        senhaHash, err := bcrypt.GenerateFromPassword([]byte(req.Senha), bcrypt.DefaultCost)
        if err != nil {
            http.Error(w, `{"erro": "Erro interno ao processar o cadastro"}`, http.StatusInternalServerError)
            return
        }

        // 5. Chama o Model para inserir no banco de dados
        // Passamos o hash gerado, e NUNCA a req.Senha em texto plano
        err = models.CriarUsuario(db, req.Nome, req.Email, string(senhaHash))
        if err != nil {
            http.Error(w, `{"erro": "Erro ao salvar usuário no banco de dados"}`, http.StatusInternalServerError)
            return
        }

        // 6. Sucesso! Retornamos 201 (Created)
        w.WriteHeader(http.StatusCreated)
        json.NewEncoder(w).Encode(map[string]string{
            "mensagem": "Usuário registrado com sucesso!",
        })
    }
}