import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/global";
import UserInfo from "../UserInfo/UserInfo";
import styles from "./EmailDetail.module.css";
import Button from "../Button/Button";

const getTime = (timestamp: string) => {
  const time = new Date(timestamp);
  return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;
};

const EmailDetail = () => {
  const { id } = useParams();
  const { emails, setEmails } = useContext(GlobalContext);
  const email = emails.find((email) => email.id);

  useEffect(() => {
    setEmails((emails) =>
      emails.map((email) => {
        if (email.id === id) {
          email.unread = true;
        }
        return email;
      })
    );
  }, [setEmails, id]);

  if (!email) {
    return <p>Error</p>;
  }

  return (
    <div className={styles.emailDetail}>
      <div className={styles.control}>
        <UserInfo
          avatarPosition="right"
          name={email.from.name}
          email={email.from.email}
          avatarUrl={email.from.avatarUrl}
        />
        <div>
          <p style={{ fontWeight: 300 }}>{getTime(email.timestamp)}</p>
          <Button style={{ color: "white", backgroundColor: "#6b7280" }}>
            Reply
          </Button>
          <Button style={{ color: "#10b981", border: "1px solid #10b981" }}>
            Forward
          </Button>
          <Button style={{ color: "#ef4444", border: "1px solid #ef4444" }}>
            Delete
          </Button>
        </div>
      </div>

      <h2 style={{ fontSize: "2.4rem" }}>{email.main.title}</h2>
      <p>{email.main.content}</p>
    </div>
  );
};

export default EmailDetail;
