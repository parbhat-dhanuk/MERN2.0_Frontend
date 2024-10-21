import Form from "../Form"
import { UserDataType } from "../Types"
import { register, resetStatus, Status } from "../../../STORE/authSlice"
import { useAppDispatch, useAppSelector } from "../../../STORE/hooks"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const Register = () => {
const dispatch = useAppDispatch()
const {status} = useAppSelector((state)=>state.auth)
const navigate = useNavigate()

  const handleRegister = async (data:UserDataType)=>{
    dispatch(register(data))
  }
  useEffect(()=>{
  if(status===Status.success){
    navigate("/login")
    dispatch(resetStatus())
  }
  },[status])
  return (
   <Form type="Register" onSubmit={handleRegister}/>
  )
}

export default Register