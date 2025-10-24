/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
"use client";

import { Cookie, Settings, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    advertising: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      advertising: true,
      functional: true,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    setIsVisible(false);

    // Load analytics and advertising scripts
    if (typeof window !== "undefined") {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  const acceptSelected = () => {
    const consentData = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    setIsVisible(false);

    // Update consent based on preferences
    if (typeof window !== "undefined") {
      window.gtag?.("consent", "update", {
        analytics_storage: preferences.analytics ? "granted" : "denied",
        ad_storage: preferences.advertising ? "granted" : "denied",
      });
    }
  };

  const rejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      advertising: false,
      functional: false,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    setIsVisible(false);

    // Deny all non-necessary cookies
    if (typeof window !== "undefined") {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === "necessary") return; // Can't disable necessary cookies

    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto max-w-4xl rounded-lg border border-zinc-700 bg-zinc-900/95 p-6 shadow-xl backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <Cookie className="size-6 text-blue-400" />
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-zinc-50">
                Este site usa cookies
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Usamos cookies para melhorar sua experiência, analisar o tráfego
                do site e para fins de publicidade. Você pode escolher quais
                cookies aceitar.{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-400 hover:underline"
                >
                  Saiba mais
                </Link>
              </p>
            </div>

            {showPreferences && (
              <div className="space-y-3 border-t border-zinc-700 pt-4">
                <h4 className="font-medium text-zinc-50">
                  Preferências de Cookies
                </h4>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-zinc-50">
                        Cookies Necessários
                      </span>
                      <p className="text-xs text-zinc-400">
                        Essenciais para o funcionamento do site
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="size-4 rounded border-zinc-600 bg-zinc-800 text-blue-400"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-zinc-50">
                        Cookies de Análise
                      </span>
                      <p className="text-xs text-zinc-400">
                        Nos ajudam a entender como você usa o site
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference("analytics")}
                      className="size-4 rounded border-zinc-600 bg-zinc-800 text-blue-400"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-zinc-50">
                        Cookies de Publicidade
                      </span>
                      <p className="text-xs text-zinc-400">
                        Usados para mostrar anúncios relevantes
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.advertising}
                      onChange={() => togglePreference("advertising")}
                      className="size-4 rounded border-zinc-600 bg-zinc-800 text-blue-400"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-zinc-50">
                        Cookies Funcionais
                      </span>
                      <p className="text-xs text-zinc-400">
                        Melhoram a funcionalidade e personalização
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={() => togglePreference("functional")}
                      className="size-4 rounded border-zinc-600 bg-zinc-800 text-blue-400"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              <button
                onClick={acceptAll}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Aceitar Todos
              </button>

              <button
                onClick={acceptSelected}
                className="rounded-lg bg-zinc-700 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-600"
              >
                Aceitar Selecionados
              </button>

              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className="flex items-center gap-1 rounded-lg border border-zinc-600 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800"
              >
                <Settings className="size-4" />
                Preferências
              </button>

              <button
                onClick={rejectAll}
                className="rounded-lg border border-zinc-600 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800"
              >
                Rejeitar
              </button>
            </div>
          </div>

          <button
            onClick={rejectAll}
            className="shrink-0 rounded-lg p-1 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-50"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
