"use client";

import { useModal } from "@/components/providers/modal-provider";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export const CreateChatGroupModal = () => {
  const { isOpen, type, onClose } = useModal();

  const isModalOpen = isOpen && type === "create-chatgroup";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Create Chat Group</DialogTitle>
        {/* Your code here */}
      </DialogContent>
    </Dialog>
  );
};
