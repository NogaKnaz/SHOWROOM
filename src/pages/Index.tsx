import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Home, Layers, ShoppingCart, User } from "lucide-react";

const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour", "New Balance", "Asics", "Converse"];

const styles = [
  { id: 1, title: "מינימליסטי", description: "קווים נקיים וצבעים שקטים", image: "/placeholder.svg" },
  { id: 2, title: "נועז", description: "טיפוגרפיה גדולה וניגודים", image: "/placeholder.svg" },
  { id: 3, title: "אקלקטי", description: "ערבוב סגנונות יצירתי", image: "/placeholder.svg" },
  { id: 4, title: "טבעי", description: "גוונים אורגניים ומרקמים", image: "/placeholder.svg" },
  { id: 5, title: "טכנולוגי", description: "ניאון, גלואו ואנימציות", image: "/placeholder.svg" },
  { id: 6, title: "קלאסי", description: "אלגנטי ונצחי", image: "/placeholder.svg" },
];

const Index = () => {
  useEffect(() => {
    document.title = "SHOWROOM – דף הבית | חלל תצוגה חכם";
    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = "SHOWROOM – חלל תצוגה חכם ליצירה ושיתוף חוויות מותג";
    if (metaDesc) {
      metaDesc.setAttribute("content", desc);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }

    // Structured data (JSON-LD)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "SHOWROOM",
      url: window.location.origin + "/",
      inLanguage: "he"
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-brand" dir="rtl">
      <header className="border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" aria-label="SHOWROOM home" className="font-semibold">SHOWROOM</Link>
          <nav className="flex items-center gap-4" aria-label="Primary">
            <Link to="/" className="text-sm text-foreground/80 hover:text-foreground transition-colors">בית</Link>
            <Link to="/view" className="text-sm text-foreground/80 hover:text-foreground transition-colors">תצוגה</Link>
          </nav>
        </div>
      </header>

      <main className="container py-8 pb-24">
        {/* Hero */}
        <section className="mb-8">
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-tr from-primary/20 via-accent/20 to-secondary/20 p-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              חלל תצוגה חכם למותגים ויוצרים
            </h1>
            <p className="text-muted-foreground max-w-2xl mb-6">
              עצבו חוויות מרהיבות, שתפו בקליק, והציגו את הערך שלכם בצורה שמוכרת.
            </p>
            <div className="flex items-center gap-3">
              <Link to="/view"><Button size="lg">התחילו עכשיו</Button></Link>
              <a href="#styles" className="text-sm underline underline-offset-4">גללו לסגנונות ↓</a>
            </div>
            <div className="mt-6 flex gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><span className="font-semibold text-foreground">+10k</span> יוצרים</div>
              <div className="flex items-center gap-2"><span className="font-semibold text-foreground">99.9%</span> זמינות</div>
            </div>
          </div>
        </section>

        {/* Brands carousel */}
        <section aria-labelledby="brands" className="mb-10">
          <h2 id="brands" className="text-lg font-semibold mb-3">מותגים מובילים</h2>
          <Carousel opts={{ align: "start" }}>
            <CarouselContent className="-ml-2">
              {brands.map((b) => (
                <CarouselItem key={b} className="basis-auto pl-2">
                  <span className="inline-flex items-center rounded-full border bg-card px-3 py-1 text-sm text-foreground/80 hover:text-foreground transition-colors">
                    {b}
                  </span>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Shop by Style */}
        <section id="styles" aria-labelledby="styles-title" className="mb-10">
          <h2 id="styles-title" className="text-lg font-semibold mb-3">Shop by Style</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {styles.map((s) => (
              <article key={s.id} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">{s.title}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={s.image}
                      alt={`תמונה עבור ${s.title}`}
                      loading="lazy"
                      className="w-full h-40 object-cover rounded-md border border-border"
                    />
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </section>

        {/* Creator */}
        <section aria-labelledby="creator" className="mb-12">
          <h2 id="creator" className="text-lg font-semibold mb-3">יוצר החודש</h2>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg" alt="צילום פרופיל" />
                <AvatarFallback>YL</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-semibold">Yuval Levi</div>
                <div className="text-sm text-muted-foreground">Motion & 3D Designer</div>
              </div>
              <Button variant="secondary">עקבו</Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60" aria-label="Bottom">
        <div className="container grid grid-cols-4 py-2 text-xs">
          <Link to="/" className="flex flex-col items-center gap-1 text-primary">
            <Home className="h-5 w-5" />
            <span>בית</span>
          </Link>
          <Link to="/view" className="flex flex-col items-center gap-1 text-foreground/70 hover:text-foreground">
            <Layers className="h-5 w-5" />
            <span>תצוגה</span>
          </Link>
          <a href="#" className="flex flex-col items-center gap-1 text-foreground/70 hover:text-foreground">
            <ShoppingCart className="h-5 w-5" />
            <span>סל</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-foreground/70 hover:text-foreground">
            <User className="h-5 w-5" />
            <span>פרופיל</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Index;
