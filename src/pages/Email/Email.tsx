import { Outlet, useParams } from "react-router-dom";
import EmailSummary from "../../components/EmailSummary/EmailSummary";
import styles from "./Email.module.css";

const EmailPage = () => {
  const { folder, id } = useParams();
  if (!folder) {
    return (
      <div className={styles.emailPage}>
        <div>
          <p style={{ fontSize: "1.8rem" }} className={styles.centerText}>
            Please choose a folder
          </p>
        </div>
        <div>
          <p style={{ fontSize: "1.8rem" }} className={styles.centerText}>
            Please choose a folder first
          </p>
        </div>
      </div>
    );
  }
  if (!id) {
    return (
      <div className={styles.emailPage}>
        <EmailSummary />
        <div>
          <p style={{ fontSize: "1.8rem" }} className={styles.centerText}>
            Please choose an email
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.emailPage}>
      <EmailSummary />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default EmailPage;
