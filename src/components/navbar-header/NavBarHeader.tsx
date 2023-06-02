import styles from "./NavBarHeader.module.css";
import users from "../../data/users.json";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

interface Props {
  authen: (data: boolean) => void;
}

const NavBarHeader = ({ authen }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogOut = () => {
    authen(false);
    navigate("/login");
  };
  return (
    <div className={styles.navbarHeader}>
      <div className={styles.navbarColLeft}>
        Pathname : <span>{location.pathname}</span>
      </div>
      <div className={styles.navbarColRight}>
        <div className={styles.userInfor}>
          <h4>{users[0].name}</h4>
          <p>{users[0].email}</p>
        </div>
        <div className={styles.navBarAvatar}>
          <img src={users[0].avatarUrl} alt="" />
        </div>
        <div className={styles.containerLogOut}>
          <button className={styles.buttonLogOut} onClick={handleLogOut}>
            <FontAwesomeIcon icon={faPowerOff} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBarHeader;
