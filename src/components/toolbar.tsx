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
    <div className="inline-flex max-h-12 items-center gap-4 overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.02),0_4px_8px_rgba(0,0,0,0.04)] rounded-full py-4 pl-4 pr-2">
      {tools
        .filter((t) => t.label !== "Theme")
        .map((t) => (
          <button key={t.label} className="inline-flex">
            <p className="text-neutral-400 text-sm">{t.label}</p>
          </button>
        ))}
      <button className="size-6 rounded-full bg-neutral-600" />
    </div>
  );
};
