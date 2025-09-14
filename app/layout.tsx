// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: { default: "Zyorix — FinOps Consulting", template: "%s | Zyorix" },
  description:
    "Zyorix helps teams cut cloud waste, align spend to value, and operationalize FinOps.",
  metadataBase: new URL("https://zyorix.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
