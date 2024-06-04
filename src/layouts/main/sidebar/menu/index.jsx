import {NavLink} from "react-router-dom";
import classNames from "classnames"
import {mainMenu} from "~/utils/consts.jsx";
import More from "~/layouts/main/sidebar/menu/more/index.jsx";
import NewPost from "~/layouts/main/sidebar/menu/new/index.jsx";
import {useAccount} from "~/store/auth/hooks.js";

export default function Menu() {

  const account = useAccount()

  return (
    <nav className="mt-0.5 mb-1" key={account}>
      {mainMenu.map((menu, index) => (
        <NavLink key={index} to={typeof menu.path === 'function' ? menu.path() : menu.path}
                 className="py-1 block group">
          {({isActive}) => (
            <div
              className={classNames("text-[color:var(--color-base)] p-3 rounded-full transition-colors inline-flex items-center group-hover:bg-[color:var(--background-third)]", {
                  "font-bold": isActive
                }
              )}>
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notification && (
                  <span
                    className="bg-[color:var(--color-primary)] w-[1.125rem] h-[1.125rem] rounded-full text-[--color:var(color-base)] absolute -right-1 -top-1.5 flex justify-center text-[11px] ">
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

