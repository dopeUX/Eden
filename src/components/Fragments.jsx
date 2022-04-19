import React, {useState} from "react";
import AccountTypePage from "./AccountTypePage";
import SetupCompletePage from "./SetupCompletePage";
import WelcomePage from "./WelcomePage";
import WorkspacePage from "./WorkspacePage";
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

export default function Fragments(){
    const [index, currentIndex] = useState(0);
    const step1Content = <h1>Step 1 Content</h1>;
    const step2Content = <h1>Step 2 Content</h1>;
    const step3Content = <h1>Step 3 Content</h1>;
    
    const component = [
       <WelcomePage/>,
       <WorkspacePage/>,
       <AccountTypePage/>,
       <SetupCompletePage/> 
    ]

    function step2Validator() {
        return true
      }
      
      function step3Validator() {
        // return a boolean
      }
      
      function onFormSubmit() {
        
      }
    
    return <div><StepProgressBar
    startingStep={0}
    onSubmit={onFormSubmit}
    secondaryBtnClass = 'prev'
    primaryBtnClass='prim'
    nextBtnName="Create Workspace"
    steps={[
      {
        content: component[0]
      },
      {
        content: component[1],
        validator: step2Validator
      },
      {
        content: component[2]
      //  validator: step3Validator
      },
      {
        content: component[3],
       // validator: step3Validator
      }
    ]}
  />

  </div> ;
}