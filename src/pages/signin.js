
import React from 'react'
import UnderConstruction from '../components/UnderConstruction'
import Navbar from '../components/Navbar'


const signin = () => {
  return (
    <>
    <UnderConstruction />
    </>
  )
}

export default signin























// import {useState} from 'react'
// import {Link, useNavigate} from 'react-router-dom'
// import {ReactComponent as ArrowRightIcon} from '../images/keyboardArrowRightIcon.svg'
// import visibilityIcon from '../images/visibilityIcon.svg'


// function SignIn() {
//   const [showPassword, setShowPassword] = useState(false)
//   const [formData, setFormData] = useState({email: '', password: ''})

//   //by destructuring this we're setting an email variable to our email property similar to this => email = formData.email;
//   const {email, password} = formData;

//   const navigate = useNavigate();
//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState, 
//       [e.target.id]: e.target.value,
      
//     }) )
//   };



//     return (
//       <>
//         <div className="pageContainer">
//           <header>
//             <p className="pageHeader"> Hey Kin!</p>
//           </header>

//           <form>
//             <input type="email" className="emailInput" placeholder="Email" id="email" value={email} onChange={onChange}/>
//             <div className="passwordInputDiv">
//               <input type={showPassword ? 'text' : 'password'} className="passwordInput" placeholder="Password" id="password"  value={password} onChange={onChange}/>                                                                   
//               <img src={visibilityIcon} alt="show password" className="showPassword" onClick={() => setShowPassword((prevState) => !prevState)} /> 
//             </div>
//             <Link to="/forgot-password" className="forgotPasswordLink"> Forgot Password </Link>

//             <div className="signInBar">
//               <p className="signInText">
//                 Sign In
//               </p>
//               <button className="signInButton">
//                 <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
//               </button>
//             </div>
//           </form>

//           {/*Google Oauth Componenet */}

//           <Link to="/sign-up" className="registerLink"> Sign Up Instead </Link>
//         </div>
//       </>
//     )
//   }
  
//   export default SignIn