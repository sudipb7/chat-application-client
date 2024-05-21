"use client";

import * as React from "react";

type ModalType = "sign-out" | "create-chatgroup";

type ModalContextState = {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
};

export const ModalContext = React.createContext<ModalContextState>({
  type: null,
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export const useModal = () => React.useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [type, setType] = React.useState<ModalType | null>(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onOpen = React.useCallback((type: ModalType) => {
    setType(type);
    setIsOpen(true);
  }, []);

  const onClose = React.useCallback(() => {
    setType(null);
    setIsOpen(false);
  }, []);

  const value = React.useMemo(
    () => ({
      type,
      isOpen,
      onOpen,
      onClose,
    }),
    [type, isOpen, onOpen, onClose]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
