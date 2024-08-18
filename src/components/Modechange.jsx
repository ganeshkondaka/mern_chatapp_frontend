import React, { useState } from 'react'

export default function Modechange() {
    const [mode, setMode] = useState("white");
    console.log("the initial mode", mode)

    // let msg_clr=document.getElementById('box').style.color

    function currmode() {
        if (mode === "white") {

            document.body.style.background = "black";
            // document.body.form.style.backgroundColor = "black";
            document.body.style.color = "white";

            document.getElementById('box').style.color="white";
            console.log("if block prev mode",mode)
            setMode("black")
            console.log("if block after mode",mode)
        } else {
            document.body.style.background = "white";
            // document.body.form.style.backgroundColor = "white";
            document.body.style.color = "black";

            document.getElementById('box').style.color="black";
            console.log("else block prev mode",mode)
            setMode("white")
            console.log("else block  after mode",mode)

        }
    }
    
    return (
        <>
            <button onClick={currmode} className='modebutton'>◑</button>
            {console.log("the final mode", mode)}
        </>
    );
}
