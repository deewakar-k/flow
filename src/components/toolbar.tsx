"use client";

import { useFontSize } from "@/context/font-size-ctx";
import { Tooltip, TooltipProvider } from "./tooltip";
import { useFontFamily } from "@/context/font-family-ctx";
import { useFocusMode } from "@/context/focus-mode-ctx";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { TextMorph } from "./text-morph";

export const Toolbar = () => {
  const { fontSize, cycleFontSize } = useFontSize();
  const { fontDisplay, cycleFontFamily } = useFontFamily();
  const { isFocusMode, toggleFocusMode } = useFocusMode();
  const { theme, setTheme } = useTheme();

  const tools = [
    {
      id: "font-family",
      label: fontDisplay,
      tooltip: "Change font",
      onClick: cycleFontFamily,
      className: "min-w-[2.5rem]",
    },
    {
      id: "font-size",
      label: `${fontSize}px`,
      tooltip: "Change font size",
      onClick: cycleFontSize,
      className: "min-w-[2.25rem]",
    },
    {
      id: "focus",
      label: "Focus",
      tooltip: isFocusMode ? "Disable focus mode" : "Enable focus mode",
      onClick: toggleFocusMode,
      className: "min-w-[3rem]",
    },
    {
      id: "history",
      label: "History",
      tooltip: "View history",
      className: "min-w-[3rem]",
    },
    {
      id: "read",
      label: "Read",
      tooltip: "Preview mode",
      className: "min-w-[2rem]",
    },
  ];

  return (
    <TooltipProvider>
      <div className="inline-flex max-h-12 items-center gap-4 overflow-hidden shadow-light shadow-dark rounded-full py-4 pl-4 pr-2 bg-toolbar-bg backdrop-blur-sm">
        {tools.map((t) => (
          <Tooltip key={t.id} content={t.tooltip}>
            <button
              onClick={t.onClick}
              className="inline-flex items-center cursor-pointer"
            >
              <TextMorph
                className={cn(
                  "text-neutral-400 text-sm hover:text-foreground transition-colors duration-200 ease-[ease] will-change-transform",
                  t.className,
                  t.label === "Focus" &&
                    isFocusMode &&
                    "text-foreground font-medium"
                )}
              >
                {t.label}
              </TextMorph>
            </button>
          </Tooltip>
        ))}
        <Tooltip content="Switch theme">
          <button
            className="size-5 cursor-pointer rounded-full bg-neutral-600 dark:hover:bg-neutral-500 transition-colors duration-200 ease-[ease]"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};
