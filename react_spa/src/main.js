import React from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>                    
                        <li><NavLink to="/contact">Contact</NavLink></li>                    
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/stuff" element={<Stuff/>}/>                        
                            <Route path="/contact" element={<Contact/>}/>                        
                        </Routes>                        
                    </div>
                </div>
            </HashRouter>                
        )
    }
}

export default Main;