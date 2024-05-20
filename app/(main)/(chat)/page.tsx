import Image from "next/image";
import { redirect } from "next/navigation";

import { signOut } from "@/auth";
import { currentUser } from "@/lib/current-user";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default async function Page() {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  const handleSignOut = async () => {
    "use server";
    await signOut({ redirectTo: "/sign-in" });
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-3">
      <Image src={user.image} alt={user.name} width={40} height={40} />
      <h1 className="text-3xl font-bold">Hi, {user?.name?.split(" ")[0]}</h1>
      <form action={handleSignOut}>
        <Button type="submit">Sign out</Button>
      </form>
      <ThemeToggle />
    </main>
  );
}
