import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Header from './Header';
function App() {
    return (  
    <div className="app">    
    <Router>      
        <Switch>       
            <Route path='/checkout'>
                <Header/>
                <Checkout />
            </Route>
            <Route path="/">          
            <Header/>     
            <Home />   
            </Route>      
        </Switch>    
    </Router>  
    </div>
    );}
export default App;