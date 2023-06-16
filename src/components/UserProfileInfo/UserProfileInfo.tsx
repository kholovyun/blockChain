import styles from "./UserProfileInfo.module.css";
import avatar from "../../assets/avatar.jpg"
import IProfileProps from "./IProfileProps";

export const UserProfileInfo: React.FunctionComponent<IProfileProps> = (props): React.ReactElement => {
  return (
    <div className={styles.profile_box}>
        <img src={avatar} alt="avatar" />
        <div className={styles.profile_box_info}>
            <p className={styles.welcome_text}>Welcome!</p>
            <h6 className={styles.user_username}>{props.user.username}</h6>
        </div>
    </div>
  )
}
