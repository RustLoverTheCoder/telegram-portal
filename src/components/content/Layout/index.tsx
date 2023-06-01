/** @jsxImportSource react */

// @ts-ignore
import { qwikify$ } from "@builder.io/qwik-react";
import type { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export const DocsLayout = qwikify$(Layout);
