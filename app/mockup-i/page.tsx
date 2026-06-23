import { SiteHeader } from "./_components/site-header";
import { Hero } from "./_components/hero";
import { Values } from "./_components/values";
import { About } from "./_components/about";
import { GetInvolved } from "./_components/get-involved";
import { ContactFooter } from "./_components/contact-footer";

export default function MockupIPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Values />
        <About />
        <GetInvolved />
      </main>
      <ContactFooter />
    </div>
  );
}
