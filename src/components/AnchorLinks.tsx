import { ReactNode } from "react";

type LinkProps = {
  href: string;
  children: ReactNode;
  isExternal?: boolean;
}

export function AnchorLinks({ href, children, isExternal }: LinkProps) {
  return (
    <a
      href={href}
      target={isExternal ? "_blank": ""}
      rel="noopener noreferer"
    >
      {children}
    </a>
  )
}