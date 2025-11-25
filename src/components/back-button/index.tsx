"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { memo } from "react";

function Component() {
  const router = useRouter();

  function back() {
    if (!document?.startViewTransition && history.length > 1) {
      router.back();
    } else if (!document?.startViewTransition && history.length <= 1) {
      router.push("/");
    } else {
      document.startViewTransition(() => {
        if (history.length > 1) {
          router.back();
        } else {
          router.push("/");
        }
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
