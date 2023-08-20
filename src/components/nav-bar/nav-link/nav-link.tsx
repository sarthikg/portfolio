"use client";
import { NavLinkData } from "./nav-link.model";
import { clsx } from "clsx";
import "./nav-link.scss";
import { usePathname, useRouter } from "next/navigation";

// This will have 3 states:
//  1. Inactive State
//  2. Active State
//  3. Hovered State
//    a. Direct Hover
//    b. Hover from Left
//    b. Hover from Right

export const NavLink: React.FC<{ data: NavLinkData }> = ({ data }) => {
  const pathName = usePathname();
  const router = useRouter();

  /**
   * Handles the navigation on click of nav-link button
   */
  function handleNavigate(): void {
    router.push(data.url);
  }

  return (
    <div
      className={clsx({
        "nav-link": true,
        "nav-link--active": pathName === data.url,
      })}
    >
      <button className="nav-link__button" onClick={handleNavigate}>
        {data.name}
      </button>
    </div>
  );
};
