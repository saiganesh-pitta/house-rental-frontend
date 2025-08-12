import { Route, Routes } from "react-router-dom";
import FindHomeBtns from "./FindHomebtns.jsx";
import AllHomes from "../AllHomes/AllHomes";
import Fav from "../AllHomes/Fav";
import HomeDetails from "../Components/HomeDetailPage";


const FindHome=()=>{

    return (<>
     <FindHomeBtns/>  
     <Routes>
        <Route path="/allhomes" element={ <AllHomes/> } />
        <Route path="/fav" element={ <Fav/> } />
       <Route path='/:id'  element={ <HomeDetails/> } />
        
     </Routes>
    </>)
}

 export default FindHome;
