import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './STORE/store'

function App() {
 
  return (
<Provider store={store}>

<BrowserRouter>
 <Routes>
  <Route path='/' element={<h1>This is Home page</h1>} />
  <Route path='/register' element={<h1>This is Register page</h1>} />
  <Route path='/login' element={<h1>This is Login page</h1>} />
 </Routes>
 </BrowserRouter>

</Provider>

  )
}

export default App
