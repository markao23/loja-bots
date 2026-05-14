package database

import (
    "database/sql"
    "fmt"
    "os"
    _ "github.com/lib/pq"
)

func ConectarBanco() (*sql.DB, error) {
    // Lendo os dados com segurança de fora do código
    host := os.Getenv("DB_HOST")
    port := os.Getenv("DB_PORT")
    user := os.Getenv("DB_USER")
    password := os.Getenv("DB_PASSWORD")
    dbname := os.Getenv("DB_NAME")

    // Montando a string dinamicamente
    strConexao := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", 
        host, port, user, password, dbname)

    db, err := sql.Open("postgres", strConexao)
    if err != nil {
        return nil, err
    }

    err := db.Ping()
    if err != nil {
        log.Fatat("Erro ao conectar no banco de dados (Ping falhou):", err)
    }
    fmt.Println("✅ Banco de dados conectado com sucesso!")

    return db, nil
}