import React,{useState} from 'react';



function TextForm(props){
   const handleClick=()=>{
        //console.log("UpperCase was clicked.");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick=()=>{
       // console.log("UpperCase was clicked.");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleOnChange=(event)=>{
        console.log("On Change.");
        setText(event.target.value);
    }
    const handleClear=(event)=>{
        //console.log("On Change.");
        let newText='';
        setText(newText);
        props.showAlert("Text Area Cleared.","success");
    }
    const handleCopy=()=>{
        let inpText=document.getElementById("mybox");
        inpText.select();
        navigator.clipboard.writeText(inpText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success");
    }
    const handleExtraSpaces=()=>{
        let inpText=text.split(/[ ]+/);
        setText(inpText.join(" "));
        props.showAlert("Extra spaces Removed","success");
    }

    const[text,setText]=useState('');
        return(
        <>
            <div className=" container mb-3" style={{color:props.hold==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
               <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor:props.hold==='dark'?'#13466e':'white',color:props.hold==='dark'?'white':'black'}}></textarea>
               <br></br>
               <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>Conver to UpperCase</button>
               <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Conver to LowerCase</button>
               <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Delete Text</button>
               <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
               <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container my-3'style={{color:props.hold==='dark'?'white':'#042743'}} >
               <h3>Your Text Summary.</h3>
               <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters. </p>
               <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read.</p>
               <h2>Preview</h2>
               <p>{text.length>0?text:"Nothing to preview."}</p>
            </div>
        </>

        );
}
export default TextForm;