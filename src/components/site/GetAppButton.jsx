import React, { useState } from "react";
import ComingSoonDialog from "./ComingSoonDialog";

export default function GetAppButton({ className = "", children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <ComingSoonDialog open={open} onOpenChange={setOpen} />
    </>
  );
}