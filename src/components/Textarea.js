import React, { useState } from 'react'

export default function Textarea(props) {
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

    function removeExtraSpaces() {
        // Remove extra spaces using regular expression
        setText(text.replace(/\s+/g, ' '));
      }

      function convertToSentenceCase() {
        // Split the text into sentences using period (.) as the delimiter
        const sentences = text.split('. ');
      
        // Convert each sentence to sentence case
        const convertedSentences = sentences.map((sentence) => {
          // Convert the first character to uppercase and the rest to lowercase
          const sentenceCase = sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
          return sentenceCase;
        });
      
        // Join the sentences back into a single string
        const sentenceCaseText = convertedSentences.join('. ');
      
        setText(sentenceCaseText);
      }

      function convertToTitleCase() {
        // Split the text into an array of words
        const words = text.split(' ');
      
        // Convert each word to title case
        const convertedWords = words.map((word) => {
          // Convert the first character to uppercase and the rest to lowercase
          const titleCaseWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          return titleCaseWord;
        });
      
        // Join the words back into a single string
        const titleCaseText = convertedWords.join(' ');
      
        setText(titleCaseText);
      }
      function addNewLine(){
        setText(text+'\n')
      }
      

  return (
    <>
    <div className="container my-2">
    <h1>Enter your text to analyse</h1>
    <textarea className="my-1 form-control" style={props.mode=='dark'?{backgroundColor: 'rgb(118,118,118)',color: 'white'}: {backgroundColor: 'white',color: 'black'}} id="textArea" value={text} onChange={handleOnChange} rows="8"></textarea>
    <button className="my-1 btn btn-primary" onClick={clearText}>Clear text</button>
    <button className="my-1 mx-2 btn btn-primary" onClick={textToUpper}>Convert text to uppercase</button>
    <button className="my-1 btn btn-primary" onClick={textToLower}>Convert text to lowercase</button>
    <button className="my-1 mx-2 btn btn-primary" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    <button className="my-1 btn btn-primary" onClick={convertToSentenceCase}>Convert In Sentence Case</button>
    <button className="my-1 mx-2 btn btn-primary" onClick={convertToTitleCase}>Convert In Title Case</button>
    <button className="my-1 btn btn-primary" onClick={addNewLine}>Add New Line</button>
    <button className="my-1 mx-2 btn btn-primary" id="copyText" onClick={textCopy}>Copy Text</button>
  </div>
    <div className='container'>
        <h1>Analysed text</h1>
        {text.length <= 1 ? text.length + ' letter' : text.length + ' letters'}<br/>
        {text.trim().split(/\s+/).length <= 1 ? text===''? 0 + ' word' :  text.trim().split(/\s+/).length + ' word' : text.trim().split(/\s+/).length + ' words'}<br/>

        {text.split(/[.!?]+/).length <= 1 ? text===''? 0 + ' sentence' :  text.split(/[.!?]+/).length + ' sentence':  text.split(/[.!?]+/).length-1 === 1? text.split(/[.!?]+/).length-1  + ' sentence': text.split(/[.!?]+/).length-1  + ' sentences'} <br/>

        {text.split(/\n\n|\r\n\r\n/).length <= 1 ? text===''? 0 + ' paragraph' :  text.split(/\n\n|\r\n\r\n/).length + ' paragraph' : text.split(/\n\n|\r\n\r\n/).length + ' paragraphs' } <br/>
        {(text.trim().split(/\s+/).length)*0.25 <= 1 ? text===''? 0 + ' second to read in wps' :  (text.trim().split(/\s+/).length)*0.25 + ' second to read in wps' : (text.trim().split(/\s+/).length)*0.25 + ' seconds to read' }  <br/>
    </div>
    <div className='container'>
        <h1>Preview</h1>
        <p>{text === ''? 'Enter text to preview' : text}</p>
    </div>
    </>
  )
}
