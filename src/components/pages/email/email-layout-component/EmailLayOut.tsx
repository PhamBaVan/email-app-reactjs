import Sidebar from "../../../sidebar/Sidebar";
import EmailNavigation from "../email-navigation-component/EmailNavigation";
import styles from "./EmailLayOut.module.css";
const EmailLayOut = () => {
  return (
    <div className={styles.emailLayOut_Container}>
      <Sidebar />
      <EmailNavigation></EmailNavigation>
    </div>
  );
};

export default EmailLayOut;
