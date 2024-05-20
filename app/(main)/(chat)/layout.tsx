import { ChatRooms } from "@/components/rooms";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex">
      <ChatRooms />
      <main className="w-full h-full relative">{children}</main>
    </div>
  );
}
