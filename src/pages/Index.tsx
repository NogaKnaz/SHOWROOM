import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const mockItems = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `תצוגה ${i + 1}`,
  description: "תיאור קצר של תצוגה/מודל בתערוכה",
  image: "/placeholder.svg",
}));

const Index = () => {
  useEffect(() => {
    document.title = "SHOWROOM – דף הבית";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "SHOWROOM – גלריית תצוגה מודרנית לפרויקטים ודגמים");
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = "SHOWROOM – גלריית תצוגה מודרנית לפרויקטים ודגמים";
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" aria-label="SHOWROOM home" className="font-semibold">SHOWROOM</Link>
          <nav className="flex items-center gap-4" aria-label="Primary">
            <Link to="/" className="text-sm text-foreground/80 hover:text-foreground transition-colors">בית</Link>
            <Link to="/view" className="text-sm text-foreground/80 hover:text-foreground transition-colors">תצוגה</Link>
          </nav>
        </div>
      </header>

      <main className="container py-10">
        <section className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">חלל תצוגה חכם לפרויקטים</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            בנו ושתפו חללי תצוגה אינטראקטיביים. הציגו דגמים, ממשקים ותכנים בצורה אלגנטית.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/view"><Button>פתח/י תצוגת דמו</Button></Link>
            <a href="#gallery" className="text-sm underline underline-offset-4">לגלריה ↓</a>
          </div>
        </section>

        <section id="gallery" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockItems.map((item) => (
            <article key={item.id} className="group">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={item.image}
                    alt={`תמונה עבור ${item.title}`}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-md border border-border"
                  />
                  <div className="mt-4 flex justify-end">
                    <Link to="/view"><Button variant="secondary">לפרטים</Button></Link>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </section>
      </main>

      <footer className="border-t border-border mt-12">
        <div className="container py-6 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} SHOWROOM</span>
          <a className="underline underline-offset-4" href="/">מדיניות פרטיות</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
