import styles from "./UserInfo.module.css";

type Props = {
  avatarPosition?: "left" | "right";
  name: string;
  email: string;
  avatarUrl: string;
};

const UserInfo = (props: Props) => {
  const { avatarPosition = "left", name, email, avatarUrl } = props;
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div
        className={styles.userInfor}
        style={{ order: avatarPosition === "right" ? 1 : undefined }}
      >
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
      <div className={styles.navBarAvatar}>
        <img src={avatarUrl} alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
