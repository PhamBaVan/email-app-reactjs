import Logo from "../../images/connect-logo-black.svg";
import styles from "../header-login/HeaderLogin.module.css";

const HeaderLogin = () => {
  return (
    <div className={styles.header}>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.loginHeadingContainer}>
        <p>Login to check your email!!</p>
      </div>
    </div>
  );
};

export default HeaderLogin;
