"use client";

import * as React from "react";
import { useFormStatus } from "react-dom";

import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = React.ComponentProps<"button">;

export function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      {...props}
      className="w-full items-center gap-2.5"
      type="submit"
      variant="outline"
      disabled={pending}
      aria-disabled={pending}
    >
      <Icon.google size={18} />
      Continue with Google
    </Button>
  );
}
