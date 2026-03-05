export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row lg:px-10">
        <div>
          <span className="font-heading text-xl font-bold text-secondary-foreground">
            Ben Hawes<span className="text-primary">.</span>
          </span>
          <p className="mt-1 text-sm text-secondary-foreground/60">
            Team Activation Keynote Speaker
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="#about"
            className="text-sm text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
          >
            About
          </a>
          <a
            href="#keynote"
            className="text-sm text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
          >
            Keynote
          </a>
          <a
            href="#testimonials"
            className="text-sm text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-sm text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
          >
            Contact
          </a>
        </div>

        <p className="text-sm text-secondary-foreground/40">
          &copy; {new Date().getFullYear()} Ben Hawes
        </p>
      </div>
    </footer>
  )
}
