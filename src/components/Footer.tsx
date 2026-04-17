export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-sand/40">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
        <div>
          <h3 className="font-serif text-xl text-primary mb-2">Mayra Jabdor</h3>
          <p>Lic. en Nutrición · Acompañamiento personalizado para una vida más saludable.</p>
        </div>
        <div>
          <h4 className="font-medium text-foreground mb-2">Contacto</h4>
          <p>hola@mayrajabdor.com</p>
          <p>+54 11 0000-0000</p>
        </div>
        <div>
          <h4 className="font-medium text-foreground mb-2">Horarios</h4>
          <p>Lunes a Viernes</p>
          <p>08:00 — 14:00 hs</p>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground pb-6">
        © {new Date().getFullYear()} Mayra Jabdor. Todos los derechos reservados.
      </div>
    </footer>
  );
}
