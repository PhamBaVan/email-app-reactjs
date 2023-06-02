import Sidebar from "../../../../sidebar/Sidebar";
import EmailNavigation from "../../email-navigation-component/EmailNavigation";
import styles from "../../email-layout-component/EmailLayOut.module.css";

const Sent = () => {
  return (
    <div>
      <div className={styles.emailLayOut_Container}>
        <Sidebar />
        <EmailNavigation></EmailNavigation>
      </div>
    </div>
  );
};

export default Sent;
