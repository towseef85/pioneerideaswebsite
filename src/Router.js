import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Whoweare from "./pages/whoweare";
import Contact from "./pages/contact";
import Investment from "./pages/investment";
import Faq from "./pages/faq";
import News from "./pages/news";

export const Routers =()=>{
    return(
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/whoweare" element={<Whoweare/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/investment" element={<Investment/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/news" element={<News/>}/>

       </Routes>
    )
}