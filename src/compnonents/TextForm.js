import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{

        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase','success');
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase','success');
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert('Text Deleted','success');
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Text Copied','success');
    }
    const handleSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Spaces Trimmed','success');
    }
    
    // const speak = () => {
    //     let msg = new SpeechSynthesisUtterance(text);
    //     window.speechSynthesis.speak(msg);
    //     const toogle = document.getElementById('toggle')
    //     if (toogle.textContent === "Speak") {
    //         toogle.innerHTML = "Stop"
    //         props.showAlert('On','success');

    //     }
    //     else {
    //         toogle.innerHTML = "Speak"
    //         if (toogle.innerHTML ==="Speak"){
    //             window.speechSynthesis.cancel()
    //         }
    //         props.showAlert('Off','success');
    //     }
    // }
    const handleNormal=()=>{
        let lowercase=text.toLowerCase();
        let words=lowercase.split(" ");
        let newWords=words.map((word)=>{
            return word.charAt(0).toUpperCase()+word.slice(1);
        });
        let newText=newWords.join(" ");
        setText(newText);
        props.showAlert('Converted to Normal','success');
    }
   
    
const [text, setText]=useState('');
    const setBagCol=()=>{
        if(props.mode.theme==='dark')
        {
            return 'black';
        }
        else if(props.mode.theme==='blue')
        {
            return '#176B87';
        }
        else if(props.mode.theme==='grey')
        {
            return '#526D82';
        }
        else
        {
            return 'white';
        }
    }
    const setCol=()=>{
        if(props.mode.theme==='dark')
        {
            return 'white';
        }
        else if(props.mode.theme==='blue')
        {
            return 'black';
        }
        else if(props.mode.theme==='grey')
        {
            return 'white';
        }
        else{
            return 'black';
        }
    }
  return (
    <>
    <div className='container' style={{color: setCol()}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: setBagCol(), color:setCol()}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleSpaces}>Remove Extra Spaces</button>
        {/* <button className='btn btn-primary mx-1 my-1' onClick={speak} id='toggle'>Speak</button> */}
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleNormal}>Normal Text</button>
    </div>
    <div className="container my-3" style={{color: setCol()}}>
        <h2>Your text summary</h2>
    
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words ans {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"NOTHING TO PREVIEW"}</p>
    </div>
    </>
  )
}
