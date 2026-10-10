import { Children, type ReactNode } from "react";

/** A hover target is a short run of words, so only the part under the cursor gets underlined. */
const WORDS_PER_MARK = 3;

function chunk(text: string, prefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  let buf = "";
  let words = 0;
  const flush = () => {
    if (buf) out.push(<span key={`${prefix}-${out.length}`} className="mark">{buf}</span>);
    buf = "";
    words = 0;
  };
  for (const tok of text.split(/(\s+)/)) {
    if (!tok) continue;
    const isSpace = /^\s+$/.test(tok);
    if (!isSpace && words === WORDS_PER_MARK) flush();
    buf += tok;
    if (!isSpace) words += 1;
  }
  flush();
  return out;
}

/** Wrap text (a string via `text`, or children mixing strings and elements such as links). */
export function Marks({ text, children }: { text?: string; children?: ReactNode }) {
  const nodes = text !== undefined ? [text] : Children.toArray(children);
  return <>{nodes.flatMap((n, i) => (typeof n === "string" ? chunk(n, String(i)) : [n]))}</>;
}
