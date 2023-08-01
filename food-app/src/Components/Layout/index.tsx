import { Outlet } from "react-router-dom";
import AppFooter from "../AppFooter";
import AppHeader from "../AppHeader";
import SideMenu from "../SideMenu";

function Layout() {
  return (
    <div>
      <AppHeader />
      <div>
        <SideMenu />
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
}
export default Layout;
