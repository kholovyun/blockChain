import Footer from "./Footer/Footer";
import { Header } from "./Header/Header";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className={styles.main_container}>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
