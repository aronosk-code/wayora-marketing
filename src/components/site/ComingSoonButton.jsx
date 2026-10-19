import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ComingSoonDialog from "./ComingSoonDialog";

export default function ComingSoonButton({
  children,
  className = "",
  variant = "default",
  size = "lg",
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => setOpen(true)}
        className={className}
      >
        {children}
      </Button>
      <ComingSoonDialog open={open} onOpenChange={setOpen} />
    </>
  );
}