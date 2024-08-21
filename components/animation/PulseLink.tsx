"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function PulseLink({
  className,
  children,
  pulseColor = "#FBBF24",
  duration = "1.5s",
}: PulsatingButtonProps) {
  return (
    <Link
      itemProp="url"
      href="https://docs.google.com/document/d/1Xthb8IRlbVBGrqj9y7K5CAic3ueBa2-INK3-2kdSFMo/edit?usp=sharing"
      target="_blank"
      className={cn(
        "relative flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-center text-white",
        className,
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
    </Link>
  );
}
