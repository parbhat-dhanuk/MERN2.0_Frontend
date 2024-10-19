import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './STORE/store'
import Home from './pages/HOME/Home'
import Register from './pages/AUTH/REGISTER/Register'
import Login from './pages/AUTH/LOGIN/Login'


function App() {
 
  return (
<Provider store={store}>

<BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/login' element={<Login/>} />
 </Routes>
 </BrowserRouter>

</Provider>

  )
}

export default App
