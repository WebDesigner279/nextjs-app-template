"use client";
import Link from "next/link";
import ContactForm from "../components/ContactForm"; // ✨ importação limpa!
import Button from "../components/Button"; // Supondo que o botão esteja configurado corretamente
import styles from "./page.module.scss"; // Importe o arquivo de estilo

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <ContactForm />

      {/* Botão para voltar à página inicial */}
      <Link href="/">
        <Button as="a">Voltar para Home</Button>
      </Link>
    </main>
  );
}
