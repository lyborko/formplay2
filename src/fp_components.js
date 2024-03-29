import './css/fp_components.css';

function A4Portrait(){
  return(
    <div className="A4-portrait">
    ASDFASDF
    </div>
  )
}

export function StaticText(props) {
  return (
    <div style={{ position: "absolute", left: props.left, top: props.top}}>{props.text}</div>
  )
}

export function StaticText2(props, {children}) {
  return (
    <div style={{ position: "absolute", left: props.left , top: props.top }}>{children}</div>
  )
}

export function A4Landscape({children}){
  return(
    <div className="A4-landscape ">
    {children}
    </div>
  )
}

export default A4Portrait;
