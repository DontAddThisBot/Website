import { Link } from "react-router-dom";

export function CustomLink({ className, to, children, ...props }) {
  return (
    <li className={className}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
