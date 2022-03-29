import React, { useState } from 'react'

export default function Textform() {
    const handleOnChange = (event) => {
        // console.log("OnChange Triggered!!")
        // console.log(event.target.value)
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("OnClick Triggered!!")
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const [text, setText] = useState('Enter Text Here..')

    return (
        <div className="container my-3">
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"><h3>Enter Text Here</h3></label>
                <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange}></textarea>
            </div>

            <div className="container m-0 p-0">
                <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper-Case</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower-Case</button>
            </div>
        </div>
    )
}