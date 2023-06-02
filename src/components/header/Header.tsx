import Logo from "../../images/connect-logo-white.svg";
import styles from "./Header.styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="" />
    </div>
  );
};

export default Header;
