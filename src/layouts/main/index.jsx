import {Outlet} from "react-router-dom";
import Sidebar from "~/layouts/main/sidebar";
import RightBar from "~/layouts/main/rightbar";
import {Modal} from "~/modals/index.jsx";
import {useModal} from "~/store/modal/hooks.js";
import {useAppearance} from "~/store/appearance/hooks.js";
import {useEffect} from "react";


export default function MainLayout() {

  const modal = useModal()
  const appearance = useAppearance()

  useEffect(() => {
    document.documentElement.style.setProperty('--background-primary', appearance.backgroundColor.primary)
    document.documentElement.style.setProperty('--background-primary-alpha', appearance.backgroundColor.primary + 'a6')
    document.documentElement.style.setProperty('--background-secondary', appearance.backgroundColor.secondary)
    document.documentElement.style.setProperty('--background-third', appearance.backgroundColor.third)
    document.documentElement.style.setProperty('--background-modal', appearance.backgroundColor.modal)

    document.documentElement.style.setProperty('--color-primary', appearance.color.primary)
    document.documentElement.style.setProperty('--color-primary-alpha', appearance.color.primary + '12')
    document.documentElement.style.setProperty('--color-secondary', appearance.color.secondary)
    document.documentElement.style.setProperty('--color-base', appearance.color.base)
    document.documentElement.style.setProperty('--color-base-secondary', appearance.color.baseSecondary)

    document.documentElement.style.setProperty('--box-shadow', appearance.boxShadow)

    document.documentElement.style.setProperty('--font-size', appearance.fontSize + 'px')
  }, [appearance]);

  return (
    <div className="w-[1265px] mx-auto flex">
      {modal && <Modal/>}
      <Sidebar/>
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          <Outlet/>
        </main>
        <RightBar/>
      </main>
    </div>
  )
}
