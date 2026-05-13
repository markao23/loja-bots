package routes

import (
	"database/sql"
	"net/http"
	"loja-bots/internal/controllers" 
)

func ConfigurarRotas(db *sql.DB) *http.ServeMux {
	
	mux := http.NewServeMux()
	
	mux.HandleFunc("POST /api/registro", controllers.Registro(db))
	mux.HandleFunc("POST /api/login", controllers.Login(db))

	return mux
}