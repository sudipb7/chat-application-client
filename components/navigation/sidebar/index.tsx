import Link from "next/link";
import Image from "next/image";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";

import { navLinks } from "@/lib/constants";
import { signOut } from "@/auth";
import { currentUser } from "@/lib/current-user";
import { NavigationSidebarAction } from "./action";

export const NavigationSidebar = async () => {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  const handleSignOut = async () => {
    "use server";
    await signOut({ redirectTo: "/sign-in" });
  };

  return (
    <nav className="w-20 h-full border-r hidden md:block pb-16">
      <div className="h-16 border-b w-full flex items-center justify-center">
        <p className="text-center">Logo</p>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-between pt-6 pb-8">
        <NavigationSidebarAction />
        <div className="flex flex-col items-center gap-y-3 -translate-y-10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.route} href={link.route} className="p-3">
                <Icon className="h-6 w-6 text-foreground" />
              </Link>
            );
          })}
          <Link
            href={`/profile/${user.id}`}
            className="inline-block p-2 relative h-9 w-9 rounded-full overflow-hidden"
          >
            <Image src={user.image} alt={user.name} fill style={{ objectFit: "cover" }} />
          </Link>
        </div>
        <form action={handleSignOut}>
          <button type="submit" className="p-2">
            <LogOut className="h-6 w-6 text-foreground" />
          </button>
        </form>
      </div>
    </nav>
  );
};
