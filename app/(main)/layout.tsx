import { NavigationBottombar } from "@/components/navigation/bottom";
import { NavigationSidebar } from "@/components/navigation/sidebar";

export default function Mainlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex">
      <NavigationSidebar />
      <main className="w-full h-full max-md:pb-16">{children}</main>
      <NavigationBottombar />
    </div>
  );
}
