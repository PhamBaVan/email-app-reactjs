import { NavLink, useLocation } from "react-router-dom";
import styles from "./EmailNavigation.module.css";

const EmailNavigation = () => {
  const location = useLocation();
  return (
    <>
      <div className={styles.emailNavContainer}>
        {location.pathname.includes("main/email") ? (
          <nav className={styles.emailNav}>
            <NavLink to="/main/email/inbox">Inbox</NavLink>
            <NavLink to="/main/email/sent">Sent</NavLink>
            <NavLink to="/main/email/reminder">Reminder</NavLink>
            <NavLink to="/main/email/spam">Spam</NavLink>
            <NavLink to="/main/email/favorite">Favorite</NavLink>
            <NavLink to="/main/email/junks">Junks</NavLink>
            <NavLink to="/main/email/drafts">Drafts</NavLink>
          </nav>
        ) : (
          <div>
            <p
              style={{ marginTop: "4rem", textAlign: "center", color: "white" }}
            >
              Construction
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default EmailNavigation;
