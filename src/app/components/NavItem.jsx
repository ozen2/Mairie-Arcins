import Link from "next/link";
import Image from "next/image";

export default function NavItem({
  IsSubMenuClicked,
  IsArrowClicked,
  Arrow,
  activeLink,
  SetActiveLink,
  name,
  toggleMenu,
  divClassName,
  subMenus = [],
}) {
  return (
    <li>
      <div>
        <Link
          href="#"
          className={
            IsSubMenuClicked
              ? "text-white hover:text-slate-200 text-2xl ml-10 flex gap-4 lg:pb-0 transition-all ease-in-out duration-300 lg:text-xl lg:ml-0 lg:px-4 relative"
              : "text-white hover:text-slate-200 text-2xl ml-10 flex gap-4 lg:text-xl lg:ml-0 lg:px-4 relative"
          }
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
          }}
        >
          {name}
          <Image
            alt=""
            src={Arrow}
            className={IsArrowClicked ? "w-2" : "w-2 rotate-90"}
          />
        </Link>
        <div className={divClassName}>
          {subMenus.map((subMenu, index) => (
            <Link
              key={index}
              href={subMenu.href}
              onClick={() => SetActiveLink(subMenu.name)}
              className={
                activeLink === subMenu.name
                  ? "text-lg text-white hover:text-slate-200 lg:bg-[--primary-color] lg:rounded-full lg:px-4"
                  : "text-lg text-white hover:text-slate-200"
              }
            >
              <span className="animated-underline2">{subMenu.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}
