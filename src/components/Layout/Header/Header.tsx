import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import { AppDispatch, AppState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/users/users.slice";

export const Header = () => {
    const dispatch: AppDispatch = useDispatch();
    const {isAuth} = useSelector((state: AppState) => {return state.users})
  return (
    <div className={styles.header_container}>
        <div className={styles.header_container_logobox}>
            <i style={{fontSize: "3em"}} className="fa-brands fa-drupal"></i>
            <div>
                <h6 className={styles.logo_text}>BT.Finance</h6>
                <p className={styles.logo_text_sub}>Best Yield for Tokens</p>
            </div>
        </div>
        <div className={styles.header_container_walletbox}>
                <h5 className={styles.logo_text}>Connect Wallet</h5>
                <i className="fa-solid fa-arrow-trend-up"></i>
        </div>
        <MenuBurger/>
        <nav className={styles.header_container_nav_menu}>
            <ul className={styles.nav_menu_list}>
                <li>{<NavLink className={styles.nav_link} to={"#"}>Investing</NavLink>}</li>
                <li>{<NavLink className={styles.nav_link} to={"#"}>Staking</NavLink>}</li>
                <li>{<NavLink className={styles.nav_link} to={"#"}>Docs</NavLink>}</li>
                <li>{<NavLink className={styles.nav_link} to={"#"}>Security</NavLink>}</li>
                {isAuth? <li>{<NavLink onClick={() => dispatch(logout())} className={styles.nav_link} to={"#"}>LogOut</NavLink>}</li> : null}
                
            </ul>
        </nav>
    </div>
  )
}
