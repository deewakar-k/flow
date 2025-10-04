"use client";

import { useFontSize } from "@/context/font-size-ctx";
import { Tooltip, TooltipProvider } from "./tooltip";
import { useFontFamily } from "@/context/font-family-ctx";
import { useFocusMode } from "@/context/focus-mode-ctx";
import { cn } from "@/lib/utils";

export const Toolbar = () => {
  const { fontSize, cycleFontSize } = useFontSize();
  const { fontDisplay, cycleFontFamily } = useFontFamily();
  const { isFocusMode, toggleFocusMode } = useFocusMode();

  const tools = [
    {
      label: fontDisplay,
      tooltip: "Change font",
      onClick: cycleFontFamily,
    },
    {
      label: `${fontSize}px`,
      tooltip: "Change font size",
      onClick: cycleFontSize,
    },
    {
      label: "Focus",
      tooltip: isFocusMode ? "Disable focus mode" : "Enable focus mode",
      onClick: toggleFocusMode,
    },
    {
      label: "History",
      tooltip: "View history",
    },
    {
      label: "Read",
      tooltip: "Preview mode",
    },
    {
      label: "Theme",
      tooltip: "Switch theme",
    },
  ];

  return (
    <TooltipProvider>
      <div className="inline-flex max-h-12 items-center gap-4 overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.02),0_4px_8px_rgba(0,0,0,0.04)] rounded-full py-4 pl-4 pr-2 bg-transparent backdrop-blur-xs">
        {tools
          .filter((t) => t.label !== "Theme")
          .map((t) => (
            <Tooltip key={t.label} content={t.tooltip}>
              <button onClick={t.onClick} className="inline-flex">
                <p
                  className={cn(
                    "text-neutral-400 text-sm hover:text-foreground transition-colors duration-200 ease-[ease]",
                    t.label === "Focus" &&
                      isFocusMode &&
                      "text-foreground font-medium"
                  )}
                >
                  {t.label}
                </p>
              </button>
            </Tooltip>
          ))}
        <Tooltip content="Switch theme">
          <button className="size-6 rounded-full bg-neutral-600 hover:bg-neutral-500 transition-colors duration-200 ease-[ease]" />
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};
