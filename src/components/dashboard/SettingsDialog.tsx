
import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import RestaurantSettings from "@/components/dashboard/RestaurantSettings";

interface SettingsDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SettingsDialog = ({ isOpen, onOpenChange }: SettingsDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="apple-dialog sm:max-w-lg p-0">
        <DialogTitle className="sr-only">Restaurant Settings</DialogTitle>
        <RestaurantSettings onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
