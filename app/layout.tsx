// app/layout.tsx
import "./globals.scss";
import React from "react";

export const metadata = {
  title: "Next.js App Template",
  description: "",
  icons: {
    icon: "/favicon.ico", // ✅ favicon 
  },
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
