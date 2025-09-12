// app/page.tsx
import { Header } from "../components/Header";
import Hero from "../components/Hero";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
