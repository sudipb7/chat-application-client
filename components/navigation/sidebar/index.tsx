import { redirect } from "next/navigation";

import { currentUser } from "@/lib/current-user";

export const NavigationSidebar = async () => {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  return (
    <nav className="w-20 h-full border-r py-3 hidden md:flex flex-col items-center justify-center"></nav>
  );
};
