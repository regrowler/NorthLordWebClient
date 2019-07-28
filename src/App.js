import React from 'react';
import './App.module.css';
import Header from "./Components/Header/Header";
import css from './App.module.css'
import Navbar from "./Components/Navbar/Navbar";
import {Route, BrowserRouter,Redirect} from 'react-router-dom'
import Cars from "./Components/Cars/Cars";
import Lastrents from "./Components/Lastrents/Lastrents";
import Profile from "./Components/Profile/Profile";

function App() {

    return (
        <BrowserRouter>
            <Redirect from="/" to="profile"/>
            <div className={css.app_wrapper}>

                <div className={css.header_wrap}>
                    <Header/>
                </div>
                <div className={css.nav_wrap}>
                    <Navbar/>
                </div>
                <div className={css.content_wrap}>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/cars" component={Cars}/>
                    <Route path="/lastrents" component={Lastrents}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
