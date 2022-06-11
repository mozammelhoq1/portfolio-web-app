import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="m-2 bg-light  shadow-sm px-3 py-1 rounded-pill">
      {match ? (
        <Link className="text-primary text-decoration-none" to={to} {...props}>
          {children}
        </Link>
      ) : (
        <Link className="text-dark text-decoration-none" to={to} {...props}>
          {children}
        </Link>
      )}
    </div>
  );
}

export default CustomLink;
