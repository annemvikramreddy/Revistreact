import React,{useContext} from 'react';
import { SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from '@clerk/clerk-react';
import Cookies from 'js-cookie';
import { useNavigate ,Link} from 'react-router-dom';
import './index.css'
import { storeContext } from '../../Context/Context';
const Home = (props) => {
  const {Cookiess} = useContext(storeContext);
  

  const { user } = useUser()
  const navigate = useNavigate()
  console.log(user)
  if(user!=null){
    Cookies.set("user",user.emailAddresses[0].emailAddress,{ expires: 7 })
  }
  // console.log(user.emailAddresses[0].emailAddress)

  const HandleLogin = () =>{
    if(user!=null){
      Cookies.set("user",user.emailAddresses[0].emailAddress,{ expires: 7 })
    }
  }
  const handleLogout = () =>{
    
      Cookies.remove("user")
    
  }
  
  
  
  return (

  <div>
    <div className="mx-auto max-w-7xl px-2 py-2 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full md:w-2/3 lg:w-1/2">
        <h1 className="font-normal">These routes will only work when you are authenticated user</h1>
        <Link to="/search" className="text-xl font-bold text-blue-400 p-2 underline">Search</Link>
        <Link to="/card" className="text-xl font-bold text-blue-400 p-2 underline">Card</Link>
          <h2 className="text-3xl font-bold text-black">Startup code for frontend design</h2>
          <p className="mt-4 text-gray-600">
            Revisiting all the basic concepts to test on n-different features in react-vite project with tailwindcss properties
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Some of creative addon on the list
            </p>
            </div>
          <form className="mt-6">
            <div className="flex w-full max-w-md flex-col mx-auto space-y-4 ">
            <SignedIn>
          <SignOutButton>
            <input className={'inputButton bg-blue-500 border-1 p-2 font-bold mt-2'} type="button" 
           onClick={handleLogout} value={'Log out'} />
            {/* <button className="bg-blue-500 border-1 p-2 font-bold mt-2">Log In</button> */}
          </SignOutButton>
        </SignedIn>

         <SignedOut>
          <SignInButton>
          <input className={'inputButton bg-blue-500 border-1 p-2 font-bold mt-2 rounded-md'} type="button" onClick={HandleLogin} value={'Log in'} />
            {/* <button className="bg-blue-500 border-1 p-2 font-bold mt-2 rounded-md">Log In</button> */}
          </SignInButton>
        </SignedOut>  
        

        {/* The children of the SignedIn component are rendered only when the user is signed in. In this case, the app will render the SignOutButton */}


        {user ? <div>Your email address is {Cookiess}</div> : null}
            </div>
          </form>
          <p className="mt-2">
            <span className="text-sm text-gray-600">
              By signing up, you agree to our terms of service and privacy policy.
            </span>
          </p>
        </div>
        <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
          <img
            className="h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Newsletter"
          />
        </div>
      </div>
    </div>
  
      </div>
    
    


  )
}

export default Home
