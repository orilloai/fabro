import type { PrecedingStageOutput } from "../lib/petri-stream";
import { Markdown } from "./markdown";

/**
 * A gate's card: the output of the stage that ran just before the gate,
 * rendered as markdown above the question, so the question can be answered
 * from what the gate shows. The text is a stage's output, so it is untrusted:
 * `Markdown` drops raw HTML and unsafe link and image URLs.
 */
export function GateCard({ output }: { output: PrecedingStageOutput }) {
  return (
    <section
      aria-label={`Output of ${output.stage}`}
      data-testid="gate-card"
      className="max-w-[78ch] rounded-lg bg-panel-alt px-3 py-2.5 outline-1 -outline-offset-1 outline-line"
    >
      <p className="mb-1.5 font-mono text-[0.6875rem] tracking-wide text-fg-muted uppercase">
        From {output.stage}
      </p>
      <Markdown content={output.text} />
    </section>
  );
}
