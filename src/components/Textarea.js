import React, { useState } from 'react'

export default function Textarea() {
    const [text, setText] = useState('');
    function handleOnChange(event){
        setText(event.target.value);
    }
    function clearText(){ 
        setText('');
    }
    function textToUpper(){ 
        setText(text.toUpperCase());
    }
    function textToLower(){ 
        setText(text.toLowerCase());
    }
    function textCopy(){ 
  // Use the Clipboard API to write the text to the clipboard
        navigator.clipboard.writeText(text)
        .then(function() {
            let copy = document.getElementById('copyText');
            copy.innerHTML = "Copied"
            setTimeout(()=>{
                copy.innerHTML = "Copy Text";
            },300)
        })
        .catch(function(err) {
        // Handle any errors that may occur
        console.error('Could not copy text: ', err);
        });
    }  
  return (
    <>
    <div className="container my-2">
    <h1>Enter your text to analyse</h1>
    <textarea className="my-2 form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
    <button className="btn btn-success" onClick={clearText}>Clear text</button>
    <button className="mx-2 btn btn-success" onClick={textToUpper}>Convert text to uppercase</button>
    <button className="btn btn-success" onClick={textToLower}>Convert text to lowercase</button>
    <button className="mx-2 btn btn-success" id="copyText" onClick={textCopy}>Copy Text</button>
  </div>
    <div className='container'>
        <h1>Analysed text</h1>
        {text.length <= 1 ? text.length + ' letter' : text.length + ' letters'}<br/>
        {text.trim().split(/\s+/).length <= 1 ? text===''? 0 + ' word' :  text.trim().split(/\s+/).length + ' word' : text.trim().split(/\s+/).length + ' words'}<br/>

        {text.split(/[.!?]+/).length <= 1 ? text===''? 0 + ' sentence' :  text.split(/[.!?]+/).length + ' sentence':  text.split(/[.!?]+/).length-1 === 1? text.split(/[.!?]+/).length-1  + ' sentence': text.split(/[.!?]+/).length-1  + ' sentences'} <br/>

        {(text.trim().split(/\s+/).length)*0.25 <= 1 ? text===''? 0 + ' second to read in wps' :  (text.trim().split(/\s+/).length)*0.25 + ' second to read in wps' : (text.trim().split(/\s+/).length)*0.25 + ' seconds to read' }  <br/>
    </div>
    </>
  )
}
