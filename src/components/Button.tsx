import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function Button({
  path,
  children,
  className,
}: {
  path: string;
  children: ReactNode;
  className: string;
}) {
  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  );
}
