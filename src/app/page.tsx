import { Editor } from "@/components/editor";
import { Toolbar } from "@/components/toolbar";

export default function Home() {
  return (
    <div className="relative font-inter flex flex-col min-h-screen max-w-lg mx-auto">
      <div className="w-full flex-1 flex-col pt-40">
        <Editor />
      </div>
      <div className="mt-auto flex items-center justify-center mb-6">
        <Toolbar />
      </div>
    </div>
  );
}
