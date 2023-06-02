import Sidebar from "../../../../sidebar/Sidebar";
import styles from "../../email-layout-component/EmailLayOut.module.css";
import EmailNavigation from "../../email-navigation-component/EmailNavigation";
const Inbox = () => {
  return (
    <div>
      <div className={styles.emailLayOut_Container}>
        <Sidebar />
        <EmailNavigation></EmailNavigation>
      </div>
    </div>
  );
};

export default Inbox;
