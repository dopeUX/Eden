import React from "react";

export default function WelcomePage(){
    return (<div className="welcome-page">
        <h1>Welcome! First things first...</h1>
        <h3 className="welcome-page-base">You can always change them later</h3>
        
        <h3 className="hero-label">Full Name</h3>
        <input type="text" className="hero-input" placeholder="Steve Jobs"/>
        <h3 className="hero-label">Display Name</h3>
        <input type="text" className="hero-input" placeholder="Steven"/>
    </div>);
}