import './css/design_layout.css';
import './css/buttons.css';
import './css/WorkBench.css';
import A4Portrait from './fp_components.js';
import {A4Landscape} from './fp_components.js';
import {Stamp} from './stamp.js';

function ToolButton(props){
  return(
    <div className={props.classname}>
    </div>
  )
}


function UpperToolBar(){
  return(
    <div className="dl_header">
      <ToolButton classname = "toolbutton.button-A4" />
      <ToolButton classname = "button-A5-landscape" />
      <ToolButton classname = "button-separator" />
      <ToolButton classname = "button-textarea" />
      <ToolButton classname = "button-picture" />
    </div>
  )
}

/* function MiddleArea(){
  return(
    <div className="dl_center">
    </div>
  )
} */

function WorkBench() {
  return (
    <>
    <Stamp width={550} 
           height={250} 
           ACode={"A43957005"} 
           Name={"MUDr. Libor Kišš"}
           Position = {"primár"}
           PCode={"P56642073101"}
    />
    <div className="work-bench">
      <UpperToolBar>
        
      </UpperToolBar>
      <A4Landscape /> 
    </div>
    </>
  );
}

export default WorkBench;
