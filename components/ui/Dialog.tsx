import { Fragment } from "react";

type DialogProps = {
  open: boolean;
  onOpenChange(open: boolean): void;
  children: React.ReactNode;
};

type DialogContentProps = {
  children: React.ReactNode;
};

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
      role="dialog"
      aria-modal="true"
      onClick={() => onOpenChange(false)}
    >
      <div className="relative w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children }: DialogContentProps) {
  return (
    <Fragment>
      <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-2xl">{children}</div>
    </Fragment>
  );
}
