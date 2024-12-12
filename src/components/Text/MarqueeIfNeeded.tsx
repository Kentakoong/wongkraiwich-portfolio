"use client";

import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { twMerge } from "tailwind-merge";

interface MarqueeTextProps {
  text: string;
  className?: string;
}

export const MarqueeIfNeeded = ({
  text,
  className,
  ...props
}: MarqueeTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;

    setIsOverflow(textRef.current.scrollWidth > textRef.current.clientWidth);
  }, [text]);

  return (
    <div ref={textRef} className={twMerge("truncate", className)} {...props}>
      {isOverflow ? <Marquee>{text}</Marquee> : text}
    </div>
  );
};
