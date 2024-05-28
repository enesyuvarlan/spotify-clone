import {Search} from "~/layouts/main/rightbar/search";
import Premium from "~/layouts/main/rightbar/premium";
import Topics from "~/layouts/main/rightbar/topics"
import WhoFollow from "~/layouts/main/rightbar/who-follow/index.jsx";
import Footer from "~/layouts/main/rightbar/footer/index.jsx";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-[70px]">
      <Search/>
      <Premium/>
      <Topics/>
      <WhoFollow/>
      <Footer/>
    </aside>
  )
}
