"use client";

import {useEffect, useState} from "react";

export default function RotatingWords({words, interval = 2600}: {words: string[], interval?: number}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    // The key remounts the span, replaying its entrance animation for each word
    <span key={index} className="word-in text-gradient" aria-live="polite">
      {words[index]}
    </span>
  );
}
