"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const TYPE_MS = 80; // per-character typing speed
const DELETE_MS = 40; // per-character deleting speed (snappier)
const HOLD_MS = 1600; // pause on a fully-typed word
const SWITCH_MS = 220; // pause after clearing, before the next word

type TypingWordProps = {
  /** Words to type out one after another, looping. */
  words: string[];
  className?: string;
};

/**
 * Types a word out character by character, holds, deletes it, then moves to the
 * next — with a blinking caret. Keeps the amber accent underline (matching
 * <AccentText />) sized to the current text. Falls back to a static first word
 * when the user prefers reduced motion.
 */
export function TypingWord({ words, className }: TypingWordProps) {
  const reduce = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  // Reserve the width of the longest word so the text after it never reflows.
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  useEffect(() => {
    if (reduce) return;
    const current = words[wordIndex] ?? "";

    // Fully typed → hold, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(t);
    }

    // Fully cleared → advance to the next word.
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, SWITCH_MS);
      return () => clearTimeout(t);
    }

    // Otherwise add or remove one character.
    const t = setTimeout(
      () =>
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        ),
      deleting ? DELETE_MS : TYPE_MS,
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, reduce]);

  return (
    <span className="relative inline-flex whitespace-nowrap">
      {/* invisible sizer: holds the width of the longest word so trailing text stays put */}
      <span className={`invisible ${className ?? ""}`} aria-hidden="true">
        {longest}
      </span>

      {/* actual animated word, overlaid and left-aligned within the reserved width */}
      <span className="absolute inset-y-0 left-0 inline-flex items-baseline">
        <span className="relative">
          <span
            className="absolute inset-x-0 bottom-1 -z-10 h-[0.35em] rounded-sm bg-cat-amber/25"
            aria-hidden="true"
          />
          <span className={className}>{reduce ? (words[0] ?? "") : text}</span>
        </span>
        {!reduce && (
          <motion.span
            aria-hidden="true"
            className="ml-0.5 inline-block w-[0.06em] self-stretch rounded-full bg-cat-amber"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, times: [0, 0.5, 0.5, 1], repeat: Infinity, ease: "linear" }}
          />
        )}
      </span>
    </span>
  );
}
