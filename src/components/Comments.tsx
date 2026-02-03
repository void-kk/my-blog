"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export function Comments() {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (containerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "void-kk/my-blog");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comment");
    script.setAttribute("theme", resolvedTheme === "dark" ? "github-dark" : "github-light");
    script.setAttribute("crossorigin", "anonymous");

    containerRef.current.appendChild(script);
  }, []);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>("iframe.utterances-frame");
    if (!iframe) return;

    const message = {
      type: "set-theme",
      theme: resolvedTheme === "dark" ? "github-dark" : "github-light",
    };

    iframe.contentWindow?.postMessage(message, "https://utteranc.es");
  }, [resolvedTheme]);

  return <div ref={containerRef} className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800" />;
}
