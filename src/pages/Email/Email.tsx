import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Email.module.css";
import EmailSummary from "../../components/EmailSummary/EmailSummary";

const EmailPage = () => {
  return (
    <div className={styles.emailPage}>
      <EmailSummary />
      <Outlet />
    </div>
  );
};

export default EmailPage;
