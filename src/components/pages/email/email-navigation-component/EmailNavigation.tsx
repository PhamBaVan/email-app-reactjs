import styles from "./EmailNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const EmailNavigation = () => {
  const location = useLocation();
  return (
    <>
      <div className={styles.emailNavContainer}>
        <nav className={styles.emailNav}>
          <NavLink to="/main/email/inbox">Inbox</NavLink>
          <NavLink to="/main/email/sent">Sent</NavLink>
          <NavLink to="/main/email/reminder">Reminder</NavLink>
          <NavLink to="/main/email/spam">Spam</NavLink>
          <NavLink to="/main/email/favorite">Favorite</NavLink>
          <NavLink to="/main/email/junks">Junks</NavLink>
          <NavLink to="/main/email/drafts">Drafts</NavLink>
        </nav>
      </div>
    </>
  );
};

export default EmailNavigation;
