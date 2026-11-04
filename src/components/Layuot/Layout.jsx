import { Outlet } from "react-router-dom";
import Navbare from "../Navbare/Navbare";

export default function Layout() {
  return (<>   <Navbare/>
   <Outlet></Outlet>
  </>

  )
}
