import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { Modals } from "@/components/modals";

export const metadata: Metadata = {
  title: "Chat App",
  description: "A chat app built with Next.js and Shadcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistMono.variable,
          GeistSans.variable
        )}
      >
        <ThemeProvider attribute="class" storageKey="chat-app" enableSystem defaultTheme="light">
          <ModalProvider>
            {children}
            <Modals />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
