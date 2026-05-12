"use client";

import React, { useState } from "react";

const ModernInput = ({
  id,
  label,
  placeholder,
  type = "text",
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

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090b] p-4">
      <div className="w-full max-w-[420px] bg-[#121214] border border-white/5 rounded-2xl p-8 shadow-2xl">
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-cyan-400 text-xl font-bold">♆</span>{" "}
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white tracking-tight mb-2 flex items-center justify-center">
            Identity<span className="text-cyan-400">.</span>
          </h1>
          <p className="text-sm text-zinc-400">
            Crie sua conta segura para começar.
          </p>
        </div>

        {/* Botões de OAuth */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#18181b] border border-white/5 rounded-lg text-sm text-zinc-300 font-medium hover:bg-white/5 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4"
            >
              <path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            Github
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#18181b] border border-white/5 rounded-lg text-sm text-zinc-300 font-medium hover:bg-white/5 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-4 h-4"
            >
              <path d="M64 320C64 273.4 76.5 229.6 98.3 191.1L208.1 382.3C230 421.5 271.9 448 320 448C334.3 448 347.1 445.7 360.8 441.4L284.5 573.6C159.9 556.3 64 449.3 64 320zM429.1 385.6C441.4 366.4 448 343.1 448 320C448 281.8 431.2 247.5 404.7 224L557.4 224C569.4 253.6 576 286.1 576 320C576 461.4 461.4 575.1 320 576L429.1 385.6zM541.8 192L320 192C257.1 192 206.3 236.1 194.5 294.7L118.2 162.5C165 102.5 238 64 320 64C414.8 64 497.5 115.5 541.8 192zM408 320C408 368.6 368.6 408 320 408C271.4 408 232 368.6 232 320C232 271.4 271.4 232 320 232C368.6 232 408 271.4 408 320z" />
            </svg>
            Google
          </button>
        </div>

        {/* Divisor */}
        <div className="flex items-center mb-8">
          <div className="flex-1 border-t border-white/5"></div>
          <span className="px-4 text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
            Ou use email
          </span>
          <div className="flex-1 border-t border-white/5"></div>
        </div>

        {/* Formulário */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <ModernInput
              id="name"
              label="Nome Completo"
              type="email"
              value={name}
              placeholder="Nome completo"
              onChange={(e: any) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-[#18181b] border border-white/5 rounded-lg text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
            />
          </div>
          <div>
            <ModernInput
              id="email"
              label="Endereço de E-mail"
              type="email"
              placeholder="ex: voce@empresa.com"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <ModernInput
              id="password"
              label="Sua Senha"
              type="password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#00E5FF] to-[#2979FF] hover:opacity-90 rounded-lg text-sm font-bold text-black transition-opacity"
            >
              CRIAR CONTA
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-zinc-500">
          Já tem uma conta?{" "}
          <a
            href="/login"
            className="text-zinc-300 font-semibold hover:text-white transition-colors"
          >
            Entre agora &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
