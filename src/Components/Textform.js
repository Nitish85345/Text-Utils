import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Summary from './Summary';

export default function Textform(props) {
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

    const handleClearClick = () => {
        setText("");
    }

    const [text, setText] = useState('')

    return (
        <>
        <div className="container my-3">
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"><h3>{props.title}</h3></label>
                <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange}></textarea>
            </div>

            <div className="container m-0 p-0">
                <button type="button" className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Upper-Case</button>
                <button type="button" className="btn btn-success mx-1" onClick={handleLoClick}>Convert to Lower-Case</button>
                <button type="button" className="btn btn-success mx-1" onClick={handleClearClick}>Clear text</button>
            </div>
        </div>
        <Summary text={text}/>
        </>
    )
}

Textform.propTypes = {
    title : PropTypes.string.isRequired,
}

Textform.defaultProps = {
    title : 'Set Title Here'
}