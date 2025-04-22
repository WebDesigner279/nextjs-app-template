// app/components/ContactForm.tsx
"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Mensagem enviada!\nNome: ${formData.nome}\nEmail: ${formData.email}\nMensagem: ${formData.mensagem}`,
    );
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Contato</h2>
      <input
        type="text"
        name="nome"
        placeholder="Seu nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="mensagem"
        placeholder="Sua mensagem"
        value={formData.mensagem}
        onChange={handleChange}
        required
        rows={5}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
