import { Navigate } from "react-router-dom";
import styles from "./Login.module.css";
import HeaderLogin from "../header-login/HeaderLogin";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  authen: (data: boolean) => void;
  auth: boolean;
}
const Login: React.FC<Props> = ({ authen, auth }: Props) => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "123456",
  });
  const submitLogin = () => {
    authen(true);
  };
  const handleTypeEmail = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserLogin({ ...userLogin, email: e.currentTarget.value });
  };

  const handleTypePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUserLogin({ ...userLogin, password: e.currentTarget.value });
  };
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (
      userLogin.email === "test1_test@gmail.com" &&
      userLogin.password === "123456"
    ) {
      submitLogin();
    }
  };
  if (auth) {
    return <Navigate to="/email" />;
  }
  return (
    <>
      <div className={styles.loginBackground}>
        <div className={styles.loginContainer}>
          <HeaderLogin />
          <div className={styles.formContainer}>
            <form action="" onSubmit={handleLogin}>
              <div className={styles.emailFieldContainer}>
                <label htmlFor="email">Email</label>
                <select onChange={handleTypeEmail} name="email" id="email">
                  <option value="----- Choose an email">
                    ----- Choose an email
                  </option>
                  <option value="test1_test@gmail.com">
                    test1_test@gmail.com
                  </option>
                </select>
              </div>
              <div className={styles.passwordFieldContainer}>
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleTypePassword}
                  type="password"
                  id="password"
                />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
