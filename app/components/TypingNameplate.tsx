"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const FIRST = "Chamodi";
const LAST = "Karunarathne";
const CHAR_DELAY = 110; // ms per character

export default function TypingNameplate() {
  const [firstCount, setFirstCount] = useState(0);
  const [lastCount, setLastCount] = useState(0);
  const [doneTyping, setDoneTyping] = useState(false);
  const [blurring, setBlurring] = useState(false);
  const animatingRef = useRef(false);

  const runTyping = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    setFirstCount(0);
    setLastCount(0);

    let i = 0;
    const total = FIRST.length + LAST.length;

    const tick = () => {
      i++;
      if (i <= FIRST.length) {
        setFirstCount(i);
      } else {
        setLastCount(i - FIRST.length);
      }
      if (i < total) {
        setTimeout(tick, CHAR_DELAY);
      } else {
        animatingRef.current = false;
        setDoneTyping(true);
      }
    };

    setTimeout(tick, CHAR_DELAY);
  }, []);

  // Type on mount
  useEffect(() => {
    runTyping();
  }, [runTyping]);

  // Hover → blur/refocus effect (only after initial typing is done)
  const handleMouseEnter = () => {
    if (!doneTyping || blurring) return;
    setBlurring(true);
  };

  const handleAnimationEnd = () => {
    setBlurring(false);
  };

  const nameplateClass = [
    "nameplate",
    blurring ? "nameplate--refocus" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <h1
      className={nameplateClass}
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={handleAnimationEnd}
    >
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
