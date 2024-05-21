"use client";

import * as React from "react";
import { CreateChatGroupModal } from "./create-chatgroup-modal";

export const Modals = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateChatGroupModal />
    </>
  );
};
