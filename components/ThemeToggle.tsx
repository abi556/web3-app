"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { useEffect, useCallback, useState, useRef } from "react";
import { useHydrated } from "@/lib/useHydrated";

const themeOptions = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useHydrated();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        close();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  if (!mounted) {
    return (
      <button
        disabled
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const Icon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
        aria-label="Toggle theme"
        aria-expanded={isOpen}
      >
        <Icon className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-background border border-accent/20 shadow-lg rounded-lg py-1 z-50 dropdown-enter">
          {themeOptions.map(({ value, label, icon: ItemIcon }) => (
            <button
              key={value}
              onClick={() => {
                setTheme(value);
                close();
              }}
              className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors duration-150 hover:bg-foreground/5 ${
                theme === value ? "font-medium text-foreground" : "text-foreground/70"
              }`}
            >
              <div className="flex items-center gap-3">
                <ItemIcon className="w-4 h-4" />
                <span>{label}</span>
              </div>
              {theme === value ? <Check className="w-4 h-4" /> : null}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
