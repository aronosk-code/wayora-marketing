import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/LanguageContext";

export default function ComingSoonDialog({ open, onOpenChange }) {
  const { t } = useI18n();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-[1.75rem] border-border bg-card">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            {t("common.comingSoonTitle")}
          </DialogTitle>
          <DialogDescription className="pt-2 text-base leading-relaxed text-muted-foreground">
            {t("common.comingSoonText")}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={() => onOpenChange(false)}
            className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
          >
            {t("common.close")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}