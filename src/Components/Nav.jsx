import { NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
// import photo2 from "../compressed_image_20kb.jpg"
import { States } from "../Context API/store.jsx";
import { useContext } from "react";
import { FiSettings } from "react-icons/fi"
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  const navigate=useNavigate()
  const { logData }= useContext(States)
   

  return (
    <>
    <div className="nav-cont"  >
      <NavLink to="/" id="fnt" > 
      <div className="logo" >
        <h1 className="bowlby-one-sc-regular" >Rent a House</h1>
      </div>
      </NavLink>
  <div>    
      <div>
      {logData.isLoggedIn ? <NavLink to="/" id="fnt" >       
          { logData.user && <div className="profile" >
            <p>{logData.user.fullName}</p> </div>} </NavLink> : <NavLink to="/details/login" id="fnt" >
      <div className="sign-in">
           <p><CiLogin/> Sign in</p>    
      </div>
      </NavLink>}
      </div>
      <div className="profile" >
         <NavLink to="/settings" id="fnt" > 
               <FiSettings className="accicon" />
         </NavLink>
        </div>
  </div>  
</div>  
    </>
  );
};

export default Navbar;

{/* <div className="profile" id="fnt" onClick={handleLogOut} style={{cursor:"pointer"}} >
          <h4>Log out</h4>    
      </div>
      
       */}
