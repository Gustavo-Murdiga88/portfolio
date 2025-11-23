"use client";

import { ChevronLeft } from "lucide-react";
import { memo } from "react";

function Component() {
  function back() {
    // @ts-expect-error View Transition API
    if (!document?.startViewTransition) {
      window.history.back();
    } else {
      // @ts-expect-error View Transition API
      document.startViewTransition(() => {
        window.history.back();
      });
    }
  }
  return (
    <button
      onClick={back}
      type="button"
      title="Voltar"
      className="mr-auto flex items-center gap-1 p-1 text-[0.75rem] text-zinc-500/90 transition-colors duration-300 hover:text-zinc-50"
      aria-labelledby="voltar"
    >
      <ChevronLeft id="voltar" size={18} />
      Voltar
    </button>
  );
}

export const BackButton = memo(Component);
