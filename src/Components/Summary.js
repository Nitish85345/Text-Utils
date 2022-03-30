import React from 'react'

export default function Summary(props) {
  return (
    <div className="container my-4 p-0">
        <h2>Your Text Summary</h2>
        <p>{props.text.split(" ").length} words and {props.text.length} characters</p>
        <p>{0.008 * props.text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{props.text}</p>
    </div>
  )
}
