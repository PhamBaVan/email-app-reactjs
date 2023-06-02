import Sidebar from "../../sidebar/Sidebar";
import styles from "./Contact.module.css";
import image from "../../../images/under-construction.png";
import Header from "../../header/Header";
import NavBarHeader from "../../navbar-header/NavBarHeader";

interface Props {
  authen: (data: boolean) => void;
}
const Contact = ({ authen }: Props) => {
  return (
    <>
      <div className={styles.contact_Container}>
        <div className={styles.contact_ColLeft}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.contactLayout_ColLeft}>
            <Sidebar />
            <div className={styles.contactContent}>
              <h3>Constructor</h3>
            </div>
          </div>
        </div>
        <div className={styles.contact_ColRight}>
          <NavBarHeader authen={authen} />
          <div className={styles.imageColRightContent}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
