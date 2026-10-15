"use client";

import { useSyncExternalStore } from "react";

// Small localStorage-backed store shared between components (currency, cookie consent).
// `serverValue` is what renders on the server and during hydration.
export function createLocalStore(key: string, fallback: string, serverValue = fallback) {
  const listeners = new Set<() => void>();

  const read = () => {
    try {
      return window.localStorage.getItem(key) ?? fallback;
    } catch {
      return fallback;
    }
  };

  return {
    set(value: string) {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        // Storage can be blocked (private mode); the choice then lasts for this page only.
      }
      listeners.forEach((l) => l());
    },
    use() {
      return useSyncExternalStore(
        (cb) => {
          listeners.add(cb);
          return () => {
            listeners.delete(cb);
          };
        },
        read,
        () => serverValue,
      );
    },
  };
}

export const currencyStore = createLocalStore("apex-currency", "AED");
// "" = not answered yet, "unknown" = still hydrating (banner stays hidden).
export const consentStore = createLocalStore("apex-consent", "", "unknown");
