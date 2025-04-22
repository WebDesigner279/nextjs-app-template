import "./globals.scss";
import React from "react";

export const metadata = {
  title: "Next.js App Template",
  description:
    "",
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
