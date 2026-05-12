"use client";

import React, { useState } from "react";
import Link from "next/link";

const ModernInput = ({
  id,
  label,
  type = "text",
  placeholder,
  ...props
}: any) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full group">
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none origin-left
          ${
            focused || props.value
              ? "-top-2 text-xs text-teal-400 bg-neutral-950 px-1 scale-90 z-10"
              : "top-3.5 text-sm text-neutral-500"
          }`}
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={focused ? placeholder : ""}
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(e.target.value !== "")}
          className="w-full h-12 px-4 py-3 font-mono text-sm tracking-wide transition-all duration-200 rounded-lg 
                     bg-neutral-900 border border-neutral-800 text-neutral-100 
                     placeholder:text-neutral-600
                     hover:border-neutral-700
                     focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 focus:outline-none"
          {...props}
        />
        <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 ring-1 ring-neutral-700/50"></div>
      </div>
    </div>
  );
};

const GlowButton = ({ children, ...props }: any) => (
  <button
    {...props}
    className="relative w-full h-12 mt-4 font-sans text-sm font-semibold tracking-wider text-black uppercase transition-all duration-300 rounded-lg group overflow-hidden"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-105"></span>
    <span className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 blur-lg group-hover:opacity-60"></span>
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
      <svg
        className="w-4 h-4 transition-transform duration-300 -translate-x-1 group-hover:translate-x-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </span>
  </button>
);

export default function MercadoModernLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-4 bg-black font-sans antialiased text-neutral-300">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md group">
        <div
          className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 
                        opacity-20 blur-sm transition-opacity duration-500 group-hover:opacity-60 pointer-events-none"
        ></div>

        <div className="relative p-8 border bg-neutral-950/90 backdrop-blur-xl border-neutral-800 rounded-2xl shadow-2xl shadow-black/60">
          <header className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-neutral-900 border border-neutral-800 text-teal-400 shadow-inner">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3c1.708 0 3.342.366 4.82 1.032l.28.135M12 11V3m0 8c2.192 0 4.236.416 6.113 1.175m-6.113-1.175a10.003 10.003 0 003.808 9.348M3.724 10.25l1.057 1.406m-2.114-2.812l1.057 1.406m11.914 9.439l1.406-1.057m-2.812 2.114l1.406-1.057M16.5 7.5l.5-.5m-.5.5l.5.5m-5.41 12.872L12 21l-.59-.628z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-neutral-100">
              Identity<span className="text-teal-400">.</span>
            </h1>
            <p className="mt-2 text-sm text-neutral-400 font-light">
              Acesse sua conta segura para continuar.
            </p>
          </header>

          <div className="grid grid-cols-2 gap-3 mb-8">
            <button className="flex items-center justify-center h-10 gap-2 text-xs font-medium transition-colors border rounded-lg bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Github
            </button>
            <button className="flex items-center justify-center h-10 gap-2 text-xs font-medium transition-colors border rounded-lg bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-1.96 5.36-7.84 5.36-5.08 0-9.24-4.2-9.24-9.36s4.16-9.36 9.24-9.36c2.88 0 4.8 1.2 5.88 2.28l2.6-2.6c-1.76-1.64-4.2-2.64-8.48-2.64-6.64 0-12 5.36-12 12s5.36 12 12 12c7.04 0 11.68-4.96 11.68-11.88 0-.8-.08-1.4-.2-2z" />
              </svg>
              Google
            </button>
          </div>

          <div className="relative mb-8">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-neutral-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 text-xs uppercase tracking-widest bg-neutral-950 text-neutral-600">
                Ou use email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <ModernInput
              id="email"
              label="Endereço de E-mail"
              type="email"
              placeholder="ex: voce@empresa.com"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
            />

            <div className="space-y-2">
              <ModernInput
                id="password"
                label="Sua Senha"
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
              />
              {/* Esqueceu a Senha (Moderno, alinhado à direita, discreto) */}
              <div className="flex justify-end">
                <Link
                  href="/forgot"
                  className="text-xs text-neutral-500 hover:text-teal-400 transition-colors"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>

            <GlowButton type="submit">Entrar no Painel</GlowButton>
          </form>

          <footer className="mt-10 text-center text-sm text-neutral-500">
            Não tem uma conta?{" "}
            <Link
              href="/register"
              className="font-medium text-neutral-200 hover:text-teal-400 transition-colors"
            >
              Crie uma agora →
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
}
