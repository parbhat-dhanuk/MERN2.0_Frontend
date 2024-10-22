import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../STORE/hooks"
import Form from "../Form"
import { UserLoginType } from "../Types"
import { login, resetStatus } from "../../../STORE/authSlice"
import { useEffect } from "react"
import { Status } from "../../../STORE/@types/authType"


const Login = () => {

  const dispatch = useAppDispatch()
  const {status,} = useAppSelector((state)=>state.auth)
  const navigate = useNavigate()
  
    const handleLogin = async (data:UserLoginType)=>{
      dispatch(login(data))
    }

    useEffect(()=>{
    if(status===Status.success){
      navigate("/")
      dispatch(resetStatus())
    }
    },[status])

  return (
    <Form type="login" onSubmit={handleLogin} />
  )
}

export default Login