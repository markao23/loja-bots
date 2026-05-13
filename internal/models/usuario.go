// Arquivo: internal/models/usuario.go
package models

import (
	"database/sql"
	"errors"
	"log"
)

// Usuario representa a estrutura da nossa tabela
// Exemplo de como deve ser a sua struct de Usuário
type Usuario struct {
    ID        int
    Nome      string
    Email     string
    SenhaHash string
}

func BuscarUsuarioPorEmail(db *sql.DB, email string) (*Usuario, error) {
    var u Usuario
    // ATENÇÃO: A tabela precisa ser users_cadastrados
    query := `SELECT id, nome, email, senha_hash FROM users_cadastrados WHERE email = $1`
    
    err := db.QueryRow(query, email).Scan(&u.ID, &u.Nome, &u.Email, &u.SenhaHash)
    if err != nil {
        return nil, err
    }
    
    return &u, nil
}

func CriarUsuario(db *sql.DB, nome string, email string, senha_hash string) error {
	querry := `
		INSERT INTO users_cadastrados (nome, email, senha_hash)
		VALUES ($1, $2, $3)
	`
	_, err := db.Exec(querry, nome, email, senha_hash)

	if err != nil {
		log.Printf("[ERRO] Falha ao inserir usuário %s: %v", email, err)
		return errors.New("erro interno ao salvar os dados do usuário")
	}
	return nil
}