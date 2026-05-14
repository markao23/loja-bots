// Arquivo: cmd/api/main.go
package main

import (
	"log"
	"net/http"

	"loja-bots/internal/database" // Ajuste conforme seu go.mod
	"loja-bots/internal/routes"   // Ajuste conforme seu go.mod
)

func main() {
	// 1. Inicia o Banco de Dados
	db, err := database.ConectarBanco()
	if err != nil {
		log.Fatalf("Erro ao conectar no banco: %v", err)
	}
	defer db.Close()

	// 2. Configura as Rotas passando a conexão do banco
	roteador := routes.ConfigurarRotas(db)

	// 3. Inicia o Servidor na porta 8080
	log.Println("Servidor rodando na porta 8080...")
	err = http.ListenAndServe(":8080", roteador)
	if err != nil {
		log.Fatalf("Erro ao iniciar servidor: %v", err)
	}
}