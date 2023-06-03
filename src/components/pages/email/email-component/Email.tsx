import { Outlet, useLocation } from "react-router-dom";
import Post from "../../../../data/messages.json";
import Header from "../../../header/Header";
import NavBarHeader from "../../../navbar-header/NavBarHeader";
import styles from "./Email.module.css";

interface Props {
  authen: (data: boolean) => void;
}

const Email = ({ authen }: Props) => {
  const location = useLocation();
  const cutPath = location.pathname.slice(
    location.pathname.lastIndexOf("/") + 1
  );

  const posts = Post.map((item) => {
    return item;
  });
  // console.log("id", id);

  const chooseInbox = (id: string) => {
    // navigate(id);
    console.log("id === ", id);
  };
  const isEmailNav = location.pathname === "/email";
  console.log("isEmailNav === ", isEmailNav);
  return (
    <>
      <div className={styles.email_Container}>
        <div className={styles.email_ColLeft}>
          <Header />
          <Outlet />
        </div>
        <div className={styles.email_ColRight}>
          <NavBarHeader authen={authen} />
          <div className={styles.email_ColRight_ContentContainer}>
            <div
              className={`${
                isEmailNav
                  ? styles.email_ColRight_ContentLeft_notShow
                  : styles.email_ColRight_ContentLeft
              }`}
            >
              <p
                className={`${
                  isEmailNav
                    ? styles.chooseAFolder_Text
                    : styles.hidden_ChooseAFolder
                }`}
              >
                Please choose a folder
              </p>
              {posts.map((item, index) => {
                if (item.folder === cutPath) {
                  const timePost = item.timestamp.slice(
                    0,
                    item.timestamp.search("T")
                  );
                  return (
                    <div
                      onClick={() => chooseInbox(item.id)}
                      className={`${styles.inboxContainer} ${
                        !item.unread ? styles.unreadInbox : ""
                      }`}
                      key={index}
                    >
                      <div className={styles.inboxColLeft}>
                        <img src={item.from.avatarUrl} alt="" />
                      </div>
                      <div className={styles.inboxColRight}>
                        <div className={styles.nameTimeContainer}>
                          <h5>{item.from.name}</h5>
                          <p>{timePost}</p>
                        </div>
                        <div className={styles.inboxTitleContent}>
                          <h4>{item.main.title}</h4>
                          <p>{item.main.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className={styles.email_ColRight_ContentRight}>
              <p
                className={`${
                  isEmailNav
                    ? styles.chooseAFolder_Text
                    : styles.hidden_ChooseAFolder
                }`}
              >
                Please choose a folder
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
