import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../STORE/hooks"
import { useEffect, useState } from "react"
import { resetToken } from "../../../STORE/authSlice"


const Navbar = () => {

   const navigate = useNavigate()
   const dispatch = useAppDispatch()
  const {user}=useAppSelector((state)=>state.auth)
  const [isLoggedIn,setIsLoggedIn]=useState<boolean>(false)
 

 useEffect(()=>{
  const token=localStorage.getItem("token")
  setIsLoggedIn(!!token || !!user.token )
 },[user.token])


 const handleLogout=()=>{
  localStorage.removeItem("token")
  setIsLoggedIn(false)
  dispatch(resetToken())
  navigate("/login")
 }

  return (
<header
    id="page-header"
    className="relative flex flex-none items-center py-8"
  >
    {/* Main Header Content */}
    <div className="container mx-auto flex flex-col gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-0 lg:px-8 xl:max-w-7xl">
      <div>
        <Link
          to="#"
          className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
        >
          <svg
            className="hi-mini hi-cube-transparent inline-block size-5 text-blue-600 transition group-hover:scale-110 dark:text-blue-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          <span>Company</span>
        </Link>

        

      </div>

      {/* search bar */}
       
      <div className="w-full max-w-sm min-w-[200px]">
  <div className="relative flex items-center">
    
 
    <input
      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-700 rounded-md pr-3 pl-14 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      placeholder="search..." 
    />
    
    <button
      className="rounded-md ml-2 bg-slate-800 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
      </svg>
    </button> 
  </div>
</div>


      <nav className="space-x-3 md:space-x-6">


        {/* search buttton */}
        

        {
          !isLoggedIn?(
            <>
            <Link
          to="/login"
          className="text-sm font-semibold underline text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
        >
          <span>Login</span>
        </Link>
        <Link
          to="/register"
          className="text-sm font-semibold underline text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
        >
          <span>Register</span>
        </Link>
            </>
          ): (<>
            
            <button
         
          onClick={handleLogout}
          className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
        >
          <span>Logout</span>
        </button>
          </>)
        }

        
       
      </nav>
    </div>
    {/* END Main Header Content */}
  </header>
  )
}

export default Navbar