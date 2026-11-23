"use client";

import { useState, useEffect } from "react";

const FIRST = "Chamodi";
const LAST = "Karunarathne";
const CHAR_DELAY = 110; // ms per character

export default function TypingNameplate() {
  const [firstCount, setFirstCount] = useState(0);
  const [lastCount, setLastCount] = useState(0);

  // Type on mount
  useEffect(() => {
    let i = 0;
    const total = FIRST.length + LAST.length;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      i++;
      if (i <= FIRST.length) {
        setFirstCount(i);
      } else {
        setLastCount(i - FIRST.length);
      }
      if (i < total) {
        timer = setTimeout(tick, CHAR_DELAY);
      }
    };

    timer = setTimeout(tick, CHAR_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="nameplate">
      {/* Line 1 */}
      <span className="l">
        <span aria-hidden="true" className="nameplate__reserve">
          {FIRST}
        </span>
        <span className="nameplate__typed">
          {FIRST.slice(0, firstCount)}
          {firstCount < FIRST.length && (
            <span className="typing-cursor" aria-hidden="true" />
          )}
        </span>
      </span>

      {/* Line 2 */}
      <span className="l">
        <span aria-hidden="true" className="nameplate__reserve">
          {LAST}
        </span>
        <span className="nameplate__typed">
          {LAST.slice(0, lastCount)}
          {firstCount >= FIRST.length && lastCount < LAST.length && (
            <span className="typing-cursor" aria-hidden="true" />
          )}
        </span>
      </span>
    </h1>
  );
}
