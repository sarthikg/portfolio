import { NavBarData } from "./nav-bar.model";
import "./nav-bar.scss";
import { NavLink } from "./nav-link";

export const NavBar: React.FC<{ data: NavBarData }> = ({ data }) => {
  return (
    <header className="nav-bar">
      <div className="nav-bar__logo"></div>
      <div className="nav-bar__nav">
        {data.navLinks.map((navLink) => (
          <NavLink key={navLink.url} data={navLink}></NavLink>
        ))}
      </div>
    </header>
  );
};
