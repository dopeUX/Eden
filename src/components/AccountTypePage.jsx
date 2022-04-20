import React, {useRef, useState} from "react";

export default function AccountTypePage(){

    const cardRef1 = useRef();
    const cardRef2 = useRef();
    const [index, setActiveIndex] = useState();
    
    function onClick(i){
      setActiveIndex(i);
    }

    const cardItems = [
        {
          image:'/icons/user.png',
          head:'For myself',
          details:'Write better. Think more clearly. Stay organized'  
        },
        {
          image:'/icons/group.png',
          head:'For myself',
          details:'Wikis, docs, tasks and projects, all in one place'  
        }
    ];
    return <section className="account-type-section">
        <h1>How are you planning to use Eden?</h1>
        <h3 className="hero-fragment-label">We'll streamline your setup experience accordingly</h3>
        
        <div className="account-type-select">
           {cardItems.map((item,x)=>{
               return <Card
                active = {x===index}
                onClick = {()=>{onClick(x)}}
                image = {item.image}
                head = {item.head}
                details = {item.details}
               />
           })}
        </div>
   
    </section>
}

function Card(props){
    return(
      <div className={`account-type-select-card ${props.active?'active':'inactive'}`} onClick={()=>{
          props.onClick()
      }}>
        <img className="" src={props.image} alt="" /> 
        <h3>{props.head}</h3>
        <h4>{props.details}</h4>
      </div>
    )
}