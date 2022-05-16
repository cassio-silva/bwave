import { ReactNode } from "react";
import { Button } from "../styles/ComponentGlobalStyles";

type CTAButtonProps = {
  children: ReactNode;
  margin?: string;
}

export function CTAButton({ children, margin }: CTAButtonProps) {
  return (
    <Button margin={margin || ""}>
      {children}
    </Button>
  )
}