import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const View = () => {
  useEffect(() => {
    document.title = "SHOWROOM – תצוגה";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "תצוגת דמו של SHOWROOM – עמוד צפייה וניסוי");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="font-semibold">SHOWROOM</Link>
          <nav className="flex items-center gap-4" aria-label="Primary">
            <Link to="/" className="text-sm text-foreground/80 hover:text-foreground transition-colors">בית</Link>
            <Link to="/view" className="text-sm text-foreground">תצוגה</Link>
          </nav>
        </div>
      </header>

      <main className="container py-10">
        <article className="grid gap-8 md:grid-cols-2 items-start">
          <Card>
            <CardHeader>
              <CardTitle>מודל הדגמה</CardTitle>
              <CardDescription>תמונת דמו ופרטי תצוגה</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg"
                alt="מודל הדגמה"
                className="w-full h-auto rounded-md border border-border"
              />
            </CardContent>
          </Card>

          <div>
            <h1 className="text-3xl font-semibold mb-2">תיאור מפורט</h1>
            <p className="text-muted-foreground mb-6">
              כאן אפשר לשלב טקסט, מפרטים, קישורים והדגמות אינטראקטיביות.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <a href="#actions">הפעל הדגמה</a>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/">חזרה</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t border-border mt-12">
        <div className="container py-6 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} SHOWROOM</span>
          <a className="underline underline-offset-4" href="/">תנאי שימוש</a>
        </div>
      </footer>
    </div>
  );
};

export default View;
