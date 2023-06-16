import { FunctionComponent, ReactElement, useState } from "react";
import styles from "./MenuBurger.module.css"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store/store";
import { logout } from "../../../../store/users/users.slice";

export const MenuBurger: FunctionComponent = (): ReactElement => {
    const [showMenu, setShowMenu] = useState(false);

    const showMenuToogle = () => {
        setShowMenu(!showMenu);
    };
    const dispatch: AppDispatch = useDispatch();
    return (
        <div className={styles.menuBurger} onClick={showMenuToogle}>
            <i style={{fontSize: "50px"}} className="fa-solid fa-bars"></i>
            {showMenu && <div className={styles.menuBurgerBox}>
                <div className={styles.closeBox}>
                    <p className={styles.close} onClick={showMenuToogle}></p>
                </div>
                    <div className={styles.linkBox}>
                        <NavLink to={"#"} className={styles.burgerLink}>Investing </NavLink>
                    </div>
                    <div className={styles.linkBox}>
                        <NavLink 
                            style={{whiteSpace: "nowrap", marginRight: "5px", marginBottom: "40px", textAlign: "center", fontSize: "1rem"}} to={"#"} 
                            className={styles.burgerLink}>
                            Личный кабинет
                        </NavLink>
                    </div>
                    <div className={styles.linkBox}>
                        <NavLink to={"#"} className={styles.burgerLink}>Staking </NavLink>
                    </div>
                    <div className={styles.linkBox}>
                        <NavLink to={"#"} className={styles.burgerLink}>Docs </NavLink>
                    </div>
                    <div className={styles.linkBox}>
                        <NavLink to={"#"} className={styles.burgerLink}>Security </NavLink>
                    </div>
                    <div className={styles.linkBox}>
                        <NavLink onClick={() => dispatch(logout())} to={"#"} className={styles.burgerLink}>LogOut </NavLink>
                    </div>
            </div>
            }
        </div>
    );
};
