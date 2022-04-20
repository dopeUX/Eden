import React, {useState} from "react";
import AccountTypePage from "./AccountTypePage";
import SetupCompletePage from "./SetupCompletePage";
import WelcomePage from "./WelcomePage";
import WorkspacePage from "./WorkspacePage";
import StepProgressBar from 'react-step-progress';
//import 'react-step-progress/dist/index.css';

export default function Fragments(){
    const [index, currentIndex] = useState(0);
    
    const component = [
       <WelcomePage/>,
       <WorkspacePage/>,
       <AccountTypePage/>,
       <SetupCompletePage/> 
    ]

    const step2Validator = () => {
        currentIndex(1)
        return true;
      }
      
    const step3Validator = () => {
        currentIndex(2)
        return true;
      }
      
    const step4Validator = () => {
        currentIndex(3)
        return true;
    }
      
    const onFormSubmit = () => {
        
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
        content: component[2],
        validator: step3Validator
      },
      {
        content: component[3],
        validator: step4Validator
      }
    ]}
  />

  </div> ;
}