import React, { useState } from "react";

function TextForm(props) {
  // for change in Textarea

  const handleOnChnage = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };

  // for UpperCase Button
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  };

  // for Lowercase Button

  const handleLowCLick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  // for handle To Copy

  const handleToCopy = () => {
    // let text = document.getElementById("myBox");  
    // text.select();
    // Do not need This Code beacuse i use Navigator api
    navigator.clipboard.writeText(text); //when upper code use then add value after text
    document.getSelection().removeAllRanges(); // when select all text in TextBox then do not Show Selection
    props.showAlert("Copied to Clipboard!", "success");
  };

  // for clear text in textarea

  const handleToClear = () => {
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared!", "success");
  }

  // For Removing Extra spaces 
  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove all Extra spaces", "success")
  }

  const [text, setText] = useState("");

  return (
    <>
     <div className="" style={{backgroundColor: props.mode==='dark'?'#13273a':'white', color: props.mode==='dark'?'#5bbbc5':'black'}}>
      <div className="container my-2">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="myBox"
          style={{backgroundColor: props.mode==='dark'?'#295987':'white', color: props.mode==='dark'?'white':'black'}}
          value={text}
          onChange={handleOnChnage}
          rows="8"
        ></textarea>
      </div>
      <div className="container my-3">
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          ToUpperCase
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowCLick}>
          ToLowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleToCopy}>
          ToCopy
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleToClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={removeExtraSpace}>Clear Space</button>
      </div>

      <div className="container my-2">
        <h2>WordCounter Details</h2>
        <p>
          {/* split(" ") code remove because when enter word does not count accurately*/}
          
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read.</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Nothing To Preview"}</p>
      </div>
    </div>
    </>
  );
}

export default TextForm;
