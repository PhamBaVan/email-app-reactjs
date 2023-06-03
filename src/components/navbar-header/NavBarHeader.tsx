import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import users from "../../data/users.json";
import UserInfo from "../UserInfo/UserInfo";
import styles from "./NavBarHeader.module.css";
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
  const { name, email, avatarUrl } = users[0];
  return (
    <div className={styles.navbarHeader}>
      <div className={styles.navbarColLeft}>
        Pathname : <span>{location.pathname}</span>
      </div>
      <div className={styles.navbarColRight}>
        <UserInfo name={name} email={email} avatarUrl={avatarUrl} />
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
