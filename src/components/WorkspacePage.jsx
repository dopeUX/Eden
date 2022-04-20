import React from "react";

export default function WorkspacePage(){
    return <section className="workspace-section">
       <h1>Let's set up a home for all your work</h1>
       <h3 className="workspace-base">You can always create another workspace later</h3>
       
       <h3 className="hero-label">Workspace Name</h3>
       <input type="text" className="hero-input" placeholder="Eden"/>
    
       <h3 className="hero-label">Workspace URL <span>(optional)</span></h3>
       <div className="workspace-url-sec">
         <div className="workspace-url-sec-url">
           <h3>www.eden.com/</h3>
           <input type="text" className="hero-input" placeholder="Example"/>
         </div> 
         

       </div>
        
    
    </section>
}