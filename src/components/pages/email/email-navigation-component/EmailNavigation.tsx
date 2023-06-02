import styles from "./EmailNavigation.module.css";
import { NavLink } from "react-router-dom";

const EmailNavigation = () => {
  return (
    <>
      <div className={styles.emailNavContainer}>
        <nav className={styles.emailNav}>
          <NavLink to="/email/inbox">Inbox</NavLink>
          <NavLink to="/email/sent">Sent</NavLink>
          <NavLink to="/email/reminder">Reminder</NavLink>
          <NavLink to="/email/spam">Spam</NavLink>
          <NavLink to="/email/favorite">Favorite</NavLink>
          <NavLink to="/email/junks">Junks</NavLink>
          <NavLink to="/email/drafts">Drafts</NavLink>
        </nav>
      </div>
    </>
  );
};

export default EmailNavigation;
