import { Route, Routes } from "react-router-dom";
import MyHomes from "../Components/myHomes.jsx";
import AddHome from "../Components/AddHome";
import Buttons from "../Components/Button";
import HomeDetails from "../Components/HomeDetailPage";



const PostHome=()=>{

    return (<>
      <Buttons/>
               <Routes >
                   <Route path='/myhome'  element={<MyHomes/>} />
                   <Route path='/addhome'  element={ < AddHome/> } />
                   <Route path='/:id'  element={ <HomeDetails/> } />
               </Routes>
    </>)
}

export default PostHome;
