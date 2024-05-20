import { redirect } from "next/navigation";

import { currentUser } from "@/lib/current-user";

export const NavigationBottombar = async () => {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  return <nav className="fixed bottom-0 inset-x-0 h-16 border-t md:hidden"></nav>;
};
