import './css/design_layout.css';
import './css/buttons.css';
import './css/WorkBench.css';
import A4Portrait from './fp_components.js';


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
    <div className="work-bench">
      <UpperToolBar>
        
      </UpperToolBar>
      <A4Portrait />
    </div>
  );
}

export default WorkBench;
