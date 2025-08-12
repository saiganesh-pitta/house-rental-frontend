import "./App.css"
import Navbar from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import StatesProvider from "./Context API/store";
import Landingpage from "./Landingpage/Landingpage";
import FindHome from "./Landingpage/FindHome";
import PostHome from "./Landingpage/PostHome";
import Settings from "./Settings";
import LoginCont from "./loginpage/loginCont";
import { States } from "./Context API/store";
import { useContext, useEffect } from "react";
  
        
   function App() {

         const { Log }= useContext(States);

      useEffect(() => {
                   Log()
                }, [])
    return(<>
    <StatesProvider>
    <Navbar/>
       <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/findhome/*" element={<FindHome/>} />
          <Route path="/posthome/*" element={<PostHome/>} />
          <Route path="/settings/*" element={<Settings/>} />
          <Route path="/details/*" element={ <LoginCont/> }  />         
       </Routes>
    </StatesProvider>
    </>)
 }

 export default App;