import {NavLink} from "react-router-dom";
import classNames from "classnames"
import {mainMenu} from "~/utils/consts.jsx";
import More from "~/layouts/main/sidebar/menu/more/index.jsx";
import NewPost from "~/layouts/main/sidebar/menu/new/index.jsx";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => (
        <NavLink key={index} to={menu.path} className="py-1 block group">
          {({isActive}) => (
            <div
              className={classNames("p-3 rounded-full transition-colors inline-flex items-center group-hover:bg-[#eff3f41a]", {
                  "font-bold": isActive
                }
              )}>
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notification && (
                  <span
                    className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -right-1 -top-1.5 flex justify-center text-[11px] ">
                    {menu?.notification}
                </span>
                )}
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>
              <div className="pr-4 pl-5 text-xl">
                {menu.title}
              </div>
            </div>
          )}
        </NavLink>
      ))}

      <More/>
      <NewPost/>

    </nav>
  )
}
