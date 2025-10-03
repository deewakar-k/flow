"use client";

import { Tooltip, TooltipProvider } from "./tooltip";

export const Toolbar = () => {
  const tools = [
    {
      label: "Inter",
      tooltip: "Change font",
    },
    {
      label: "16px",
      tooltip: "Change font size",
    },
    {
      label: "Focus",
      tooltip: "Enable focus mode",
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
      <div className="inline-flex max-h-12 items-center gap-4 overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.02),0_4px_8px_rgba(0,0,0,0.04)] rounded-full py-4 pl-4 pr-2 bg-transparent backdrop-blur-lg">
        {tools
          .filter((t) => t.label !== "Theme")
          .map((t) => (
            <Tooltip key={t.label} content={t.tooltip}>
              <button className="inline-flex">
                <p className="text-neutral-400 text-sm hover:text-foreground transition-colors duration-200 ease-[ease]">
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
