// app/about/page.tsx
"use client";

import Link from "next/link";
import Button from "../components/Button";
import styles from "./page.module.scss"; // Importe o arquivo de estilo

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <h1>Você está na página About</h1>
      <Link href="home">
        <Button as="a">Voltar para Home</Button>
      </Link>

      <Link href="contact" passHref>
        <Button as="a">Contact</Button>
      </Link>
    </main>
  );
}
