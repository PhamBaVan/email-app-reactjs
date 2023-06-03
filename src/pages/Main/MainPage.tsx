import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBarHeader from "../../components/navbar-header/NavBarHeader";
import styles from "./Main.module.css";

interface Props {
  authen: (data: boolean) => void;
}

const MainPage = ({ authen }: Props) => {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      <div>
        <NavBarHeader authen={authen} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
