import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () =>{
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", 'success');
  }
  const handleLoClick = () =>{
    const newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", 'success');
  }
  const handleClrClick = () =>{
    const newText = '';
    setText(newText);
    props.showAlert("Text Cleared", 'success');
  }
  const copyText = () =>{
    const newText = document.getElementById('mybox');
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Copied", 'success');

  }
  const handleExtraSpaces= () =>{
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are Removed from the Text", 'success');
  }





  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='dark'?'white':'#042743'}}onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClrClick} >Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={copyText} >Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        
       
  </div>
  <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.08 * text.split(" ").length} Minutes Read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
  </div>
  </>
  )
}
