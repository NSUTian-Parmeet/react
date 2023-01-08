import React, { useState }  from 'react'

import PropTypes from 'prop-types'

export default function Textforms(props) {
    const [text, settext] = useState("Enter the text here");
    const handleUpClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleOnChange = (e) => {
        // console.log("Trying to change content");
        settext(e.target.value);
    }
    const handleLoClick = () =>{
        let newText = text.toLocaleLowerCase();
        settext(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClick = () =>{
        settext("");
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="mx-2 btn btn-primary "  onClick={handleLoClick} >Convert to LowerCase</button>
            <button className="btn btn-primary "  onClick={handleClick} >Clear Text</button>
        </div>
        <div className="container">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.008*text.split(" ").length}Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
