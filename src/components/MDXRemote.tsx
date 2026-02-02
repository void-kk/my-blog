"use client";

import { MDXProvider } from "@mdx-js/react";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { useEffect, useState } from "react";

interface MDXRemoteProps {
  source: string;
}

export function MDXRemote({ source }: MDXRemoteProps) {
  const [Content, setContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    async function compileMDX() {
      try {
        const code = await compile(source, {
          outputFormat: "function-body",
        });
        const { default: MDXContent } = await run(code, {
          ...runtime,
          baseUrl: import.meta.url,
        });
        setContent(() => MDXContent);
      } catch (error) {
        console.error("Failed to compile MDX:", error);
      }
    }
    compileMDX();
  }, [source]);

  if (!Content) {
    return <div>Loading...</div>;
  }

  return (
    <MDXProvider>
      <Content />
    </MDXProvider>
  );
}
