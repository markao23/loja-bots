package database

import (
    "database/sql"
    "fmt"
    "log"
    "os"
    _ "github.com/lib/pq"
)

func ConectarBanco() (*sql.DB, error) {
    err := godotenv.Load("../../.env")
    if err != nil {
        err = godotenv.Load(".env")
        if err != nil {
            log.Println("Aviso: Arquivo .env não encontrado. Tentando ler variáveis direto do sistema.")
        }
    }

    // Lendo os dados com segurança de fora do código
    host := os.Getenv("DB_HOST")
    port := os.Getenv("DB_PORT")
    user := os.Getenv("DB_USER")
    password := os.Getenv("DB_PASSWORD")
    dbname := os.Getenv("DB_NAME")

    if host == "" || port == "" || user == "" || dbname == "" {
        log.Fatal("ERRO CRÍTICO: Variáveis de ambiente do banco de dados não configuradas no .env!")
    }

    // Montando a string dinamicamente
    strConexao := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", 
        host, port, user, password, dbname)

    db, err := sql.Open("postgres", strConexao)
    if err != nil {
        return nil, err
    }

    return db, nil
}