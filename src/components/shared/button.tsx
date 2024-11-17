import { PropsWithChildren } from "react";
/**
 * PropsWithChildren : children을 포함하는 props
 */

interface ButtonProps {
  onClick: () => void;
}
export default function Button({
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  return <button onClick={onClick}>{children}</button>;
}
