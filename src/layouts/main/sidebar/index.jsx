import Logo from "~/layouts/main/sidebar/logo/index.jsx";
import Menu from "~/layouts/main/sidebar/menu/index.jsx";

export default function Sidebar() {
  return (
    <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col overflow-auto">
      <Logo/>
      <Menu/>
      <div className="mt-auto">
        <div className="my-3">
          Enes
        </div>
      </div>
    </aside>
  )
}
