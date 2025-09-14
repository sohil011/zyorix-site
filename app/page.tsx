// app/page.tsx
Header is rendered by app/layout.tsx
import Hero from "../components/Hero";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
