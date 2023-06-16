import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { MainPage } from './containers/MainPage/MainPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from './store/store'
import { checkToken } from './store/users/users.slice'
import {useEffect} from "react"

const App = () => {
  const dispatch: AppDispatch = useDispatch()
  const {isAuth} = useSelector((state: AppState) => state.users, shallowEqual)
    useEffect(() => {
        dispatch(checkToken())
    }, [dispatch, isAuth])
  return (
    <div className='container'>
      <BrowserRouter>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <ToastContainer />
        <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route path='/' element={<MainPage/>}/>
              </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
