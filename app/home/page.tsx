// app/home/page.tsx
"use client";

import Link from "next/link";
import Button from "../components/Button";
import styles from "./page.module.scss"; // Importe o arquivo de estilo

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1>Bem-vindo ao modelo de aplicativo Next.js com TypeScript, Redux Toolkit e SCSS.</h1>
      <Link href="about" passHref>
        <Button as="a">Ir para About</Button>
      </Link>
    </main>
  );
}
