"use client";

import { MessageCirclePlus } from "lucide-react";

import { useModal } from "@/components/providers/modal-provider";

export const NavigationSidebarAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <button
        onClick={() => onOpen("create-chatgroup")}
        className="rounded-full h-11 w-11 bg-foreground text-background flex items-center justify-center"
      >
        <MessageCirclePlus className="h-5 w-5" />
      </button>
    </div>
  );
};
