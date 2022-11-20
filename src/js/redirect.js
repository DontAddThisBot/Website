import { Link, useResolvedPath } from "react-router-dom";

export function Redirect({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  return (
    <Link to={resolvedPath.pathname} {...props}>
      {children}
    </Link>
  );
}
