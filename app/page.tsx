import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Page() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-3">
      <h1 className="text-3xl font-bold text-primary">Hello World</h1>
      <Button>Click me</Button>
      <ThemeToggle />
    </main>
  );
}
