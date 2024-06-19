import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=> {
     
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = ()=> {
     
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      
    // const handleSyllableClick = ()=> {
     
    //     var word = document.getElementById("myBox");
    //     var syllableCount = word.match(/[aeiouy]{1,2}/gi).length;
    //     alert("The word has " + syllableCount + " syllables.");
    // }
    const handleClearClick = ()=> { 
     
        let newText = " ";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handleOnChange = (event)=> {
    
        setText(event.target.value)
    }
    
    const[text, setText] = useState('Enter text here');
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // corrext way ti change the state 
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick} style={{backgroundColor:props.mode==='dark'?'#6495ED':'blue' }} >Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick} style={{backgroundColor:props.mode==='dark'?'#6495ED':'blue' }} >Convert to LowerCase</button>
            <button className='btn btn-primary' onClick={handleClearClick}  style={{backgroundColor:props.mode==='dark'?'#6495ED':'blue' }} >Clear Text</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

            {/* <button className='btn btn-primary' onClick={handleSyllableClick}>Syllables</button> */}
    </div>
    <div className="container  my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").length} Minutes to Read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </>
  )
}
