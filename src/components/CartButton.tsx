import { ReactNode } from "react";

export default function CartButton({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return <button className={`${className}`}>{children}</button>;
}
