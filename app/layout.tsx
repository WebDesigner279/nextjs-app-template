import "./globals.scss";
import React from "react";

export const metadata = {
  title: "Next.js App Template",
  description:
    "A Next.js application template with TypeScript, Redux Toolkit, and SCSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
