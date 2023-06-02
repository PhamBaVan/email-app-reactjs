import Sidebar from "../../sidebar/Sidebar";
import styles from "./Home.module.css";
import image from "../../../images/under-construction.png";
import Header from "../../header/Header";
import NavBarHeader from "../../navbar-header/NavBarHeader";

interface Props {
  authen: (data: boolean) => void;
}
const Home = ({ authen }: Props) => {
  return (
    <>
      <div className={styles.home_Container}>
        <div className={styles.home_ColLeft}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.homeLayout_ColLeft}>
            <Sidebar />
            <div className={styles.homeContent}>
              <h3>Constructor</h3>
            </div>
          </div>
        </div>
        <div className={styles.home_ColRight}>
          <NavBarHeader authen={authen} />
          <div className={styles.imageColRightContent}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
