import './css/design_layout.css';
import './css/buttons.css';
import './css/WorkBench.css';
import {A4Portrait,  StaticText, StaticText2 } from './fp_components.js';
import {A4Landscape} from './fp_components.js';
import {Stamp} from './stamp.js';
import {Fragment} from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import {MyDocument} from './pdfpage.js';
import ReactPDF from '@react-pdf/renderer';


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

function savepdfdoc(){
  window.alert('cd');
  ReactPDF.render(<MyDocument />, `C:/Users/kiss/Documents/VSC/formplay2/xexample.pdf`);
}

function WorkBench() {
  return (
    <>
  {/*   <PDFViewer>
        <MyDocument />
    </PDFViewer> */}
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
      
      <A4Landscape>
      <button onClick={savepdfdoc}>save</button>
      <StaticText left={0} top={30} text={<Fragment>This is an <strong>HTML</strong> string.</Fragment>} /> 
      <StaticText left={0} top={50} text={<Fragment>This is an <strong>HTML</strong> string.</Fragment>} /> 
      </A4Landscape> 
    </div>
    </>
  );
}

export default WorkBench;
