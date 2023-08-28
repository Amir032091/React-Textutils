import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpperClick = () => {
        let toUpper = text.toUpperCase();
        setText(toUpper);
        props.showAlert(": Converted to Uppercase!", "success")


    };
    const handleLowerClick = () => {
        let toLower = text.toLowerCase();
        setText(toLower);
        props.showAlert(": Converted to Lowercase!", "success")


    };
    const handleClearClick = () => {
        let toClear = ""
        setText(toClear);
        props.showAlert(": Textarea has been cleared !", "success")


    };
    const handleCapitalizeClick = () => {


        let toCapitalize = text
            .split('. ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('. ')
            ;
        setText(toCapitalize);
        props.showAlert(": Converted to Capitalize!", "success")


    };
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert(": Copied to clipboard!", "success")



    };

   
    





    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    return (
        <>
            <div className="form mt-4" style={{ color: props.mymode === "light" ? "#042743" : "white" }}>
                <h2 className="mb-2" >{props.heading}</h2>
                <div className="form-group my-2">
                    <textarea
                        className="form-control"
                        style={{ backgroundColor: props.mymode === 'dark' ? 'white' : '#d1dfe3', color: "dark" }}
                        id="myBox"
                        value={text}
                        onChange={handleOnChange}
                        rows="6"
                    ></textarea>
                </div>

                <button className="btn btn-primary my-1" disabled={text.length === 0} onClick={handleUpperClick}>
                    convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleLowerClick}>
                    convert to Lowercase
                </button>

                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleCapitalizeClick}>
                    Capitalize  the text
                </button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleCopyClick}>
                    Copy to Clipboard
                </button>
              



                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleClearClick}>
                    Clear All
                </button>

            </div>
            <div className="container " style={{ color: props.mymode === "light" ? "#042743" : "white" }}>
                <h3 className="py-2" style={{ color: props.mymode === "light" ? "#042743" : "white" }}>Text Summary</h3>
                <p> words: {text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} characters: {text.length}</p>
                <p> Reading Time: {0.008 * text.split(" ").filter((ele) => { return ele.length !== 0 }).length} </p>
                <h3 className="py-2">Prefix</h3>
                <p>{text.length > 0 ? text : "Enter any text above to see the text here"}</p>

            </div>
        </>
    );
}
