"use client";
import { CodeBlock, dracula } from "react-code-blocks";

export default function MyCodeBlock({ codeSyntax }: { codeSyntax: string }) {
  return (
    <div className="text-sm md:text-base">
      <CodeBlock text={codeSyntax} language={"javascript"} theme={dracula} />
    </div>
  );
}
