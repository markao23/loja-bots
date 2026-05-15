package routes

import (
	"database/sql"
	"loja-bots/internal/controllers"
	"net/http"
)

// CorsMiddleware global
func CorsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func ConfigurarRotas(db *sql.DB) *http.ServeMux {

	mux := http.NewServeMux()

	mux.HandleFunc("/api/registro", controllers.Registro(db))
	mux.HandleFunc("/api/login", controllers.Login(db))

	return mux
}
