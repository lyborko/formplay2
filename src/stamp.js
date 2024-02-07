import { useRef, useEffect } from 'react';

const axisX = 255;

function DrawFrame(Ctx){
    Ctx.globalAlpha = 1;
    Ctx.strokeStyle = "black";
    Ctx.beginPath();
    Ctx.strokeRect(20.5, 20.5, 360, 125);
    Ctx.strokeRect(20.5, 20.5, 108, 125);
    Ctx.stroke();
}

function DrawPnPP(Ctx){
    Ctx.font = "12px Arial";
    Ctx.fillStyle = "black";
    Ctx.textAlign = "center"; 
    Ctx.fillText("Psychiatrická", 70, 40); 
    Ctx.fillText("nemocnica", 70, 60); 
    Ctx.fillText("Philippa Pinela", 70, 80); 
    Ctx.fillText("Pezinok", 70, 100); 
}

function DrawAcode(Ctx, ACode){
    Ctx.font = "bold 16px Arial";
    Ctx.fillStyle = "black";
    Ctx.textAlign = "center"; 
    Ctx.fillText(ACode, axisX, 40); 
}

function DrawName(Ctx, ACode){
    Ctx.font = "26px Arial";
    Ctx.fillStyle = "black";
    Ctx.textAlign = "center"; 
    Ctx.fillText(ACode, axisX, 80); 
}

function DrawPosition(Ctx, ACode){
    Ctx.font = "24px Arial";
    Ctx.fillStyle = "black";
    Ctx.textAlign = "center"; 
    Ctx.fillText(ACode, axisX, 110); 
}

function DrawPcode(Ctx, ACode){
    Ctx.font = "bold 16px Arial";
    Ctx.fillStyle = "black";
    Ctx.textAlign = "center"; 
    Ctx.fillText(ACode, axisX, 140); 
}


export function Stamp(props) {
    const canvasRef = useRef(null);
    
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      //context.rotate(20 * Math.PI / 180);
      context.fillStyle = 'white';
      context.fillRect(0, 0,props.width, props.height);
      DrawFrame(context);
      DrawPnPP(context);
      DrawAcode(context, props.ACode);
      DrawName(context, props.Name);
      DrawPosition(context, props.Position);
      DrawPcode(context, props.PCode);
      //context.rotate(20 * Math.PI / 180);
    }, []);
    
    return <canvas ref={canvasRef} width={props.width} height={props.height} />;
    }