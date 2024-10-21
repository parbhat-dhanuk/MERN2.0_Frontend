import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../STORE/hooks"
import Form from "../Form"
import { UserLoginType } from "../Types"
import { login, resetStatus, Status } from "../../../STORE/authSlice"
import { useEffect } from "react"


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