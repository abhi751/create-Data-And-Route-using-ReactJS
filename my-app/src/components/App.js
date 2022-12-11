import React from "react";
import "./header/Header.css"
import PostViews from "./PostViews";
import "./card/Card.css"
import {BrowserRouter,Routes,Route} from "react-router-dom" 
import Landing from "./landing-page/Landing";
import "../components/landing-page/Landing.css"
function App(){
    return(
        <div id="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>}></Route>
                    <Route path="/PostViews" element={<PostViews/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App