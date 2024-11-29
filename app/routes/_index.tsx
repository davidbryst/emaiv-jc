import type { MetaFunction } from "@remix-run/node";
import { About } from "~/components/about/about";
import { Comment } from "~/components/comment/comment";
import { Features } from "~/components/features/features";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
import { Hero } from "~/components/hero/hero";
import { Newsletter } from "~/components/newsletter/newsletter";
import { Realisation } from "~/components/realisation/realisation";

export const meta: MetaFunction = () => {
  return [
    { title: "Emaiv jc" },
    { name: "Accueil", content: "Bienvenu chez Emaiv jc" },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Features />
      <Realisation />
      <Comment />
      <Newsletter />
      <Footer />
    </div>
  );
}

