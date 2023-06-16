import { useState , useEffect} from "react";
import styles from "./MainPage.module.css";
import Modal from "../../components/UI/Modal/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../validationShremas/validationShremasLogin";
import { AppDispatch, AppState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, login, register } from "../../store/users/users.slice";
import IUserDTO from "../../interfaces/IUserDTO";
import {toast} from "react-toastify"
import { UserProfileInfo } from "../../components/UserProfileInfo/UserProfileInfo";

export const MainPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [formPick, setFormPick] = useState("register");
    const openModal = (pickModal: string) => {
        setFormPick(pickModal);
        setShowModal(true);
    };
    const {message, user, isAuth} = useSelector((state: AppState) => state.users)

    useEffect(() => {
        if (message) {
          toast.info(message, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          dispatch(clearMessage())
        }
      }, [message]);
    const closeModal = () => {
        setShowModal(false);
    };
    const dispatch: AppDispatch = useDispatch();
  return (
    <div className={styles.main_page_container}>
        {isAuth? 
            null
            :
        <div className={styles.promo_block}>
            <div className={styles.promo_block_interactive}>
                INTEGRATION * DEFI INTEGRATION * DEFI
            </div>
                <h1 className={styles.promo_block_text}>BT.FINANCE <span>MULTI CHAIN SMART DEFI</span> YIELD AGGREGATOR</h1>
        </div>
        }
        
        {isAuth? 
        <UserProfileInfo user={user!}/>
        :
        null
        }
        
        {isAuth?
            null
            :
            <div className={styles.controlls_block}>
                <p className={styles.controlls_text}>BT.Finance Is Multi-Chain Smart Defi
                Yield Aggregator Targets The Best And 
                Sustainable Yield
                </p>
                <div className={styles.controlls_block_btns}>
                    <button onClick={() => openModal("login")} className={styles.controll_btn}>Login</button>
                    <button onClick={() => openModal("register")} className={styles.controll_btn}>Registration</button>
                </div>
            </div>
        }
        
        <Modal show={showModal} close={closeModal}>
                <h3>{formPick === "register" ? "Registration" : "Login"}</h3>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    validateOnBlur
                    onSubmit={async (values: IUserDTO) => {
                        formPick === "login"?
                        dispatch(login(values))
                        :
                        dispatch(register(values))

                        closeModal()
                    }}
                    validationSchema={validationSchema}
                >
                    {() => (
                        <Form className={styles.form_column}>
                            <ErrorMessage className={styles.error_text} name="username" component="div"/>
                            <Field className={styles.login_input} name="username" type="text" placeholder="Email" />
                            <ErrorMessage className={styles.error_text} name="password" component="div"/>
                            <Field className={styles.login_input} name="password" type="password" placeholder="Пароль" />
                            <button
                                className={styles.controll_btn_modal} 
                                type="submit">
                                    {formPick === "register" ? "Registration" : "Login"}    
                            </button>
                        </Form>
                    )}
                </Formik>
            </Modal>

    </div>
  )
}
