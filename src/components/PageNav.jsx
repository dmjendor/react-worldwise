import { Link, NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/page1">Page 1</NavLink>
        </li>
        <li>
          <NavLink to="/page2">Page 2</NavLink>
        </li>
        <li>
          <Link to="/page3">Page 3</Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
