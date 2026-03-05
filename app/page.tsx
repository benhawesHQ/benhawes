import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Credibility } from "@/components/credibility"
import { Problem } from "@/components/problem"
import { Framework } from "@/components/framework"
import { Quote } from "@/components/quote"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Credibility />
      <Problem />
      <Framework />
      <Quote />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
