import React from "react";
import './Output.css';

const style : any = {
    main : {
        position : "relative",
        width : "80%",
        height : "95%",
        borderRadius : "15px",
        backgroundColor : "#363B45",
        fontFamily : "Source Code Pro",
        overflow : "hidden"
    },

    content : {
        textAlign: "left",
        display : "block",
        width : "94%",
        height : "85%",
        marginLeft : "2vh",
        marginTop : "2vh",
        marginRight : "1vh",
        marginBottom : "5%",
        position : "relative",
        overflowY : "scroll"
    },

    sub : {
        width: "100%",
        height : "10%",
        position : "relative",
        backgroundColor : "#25282E"
    }
}

class Output extends React.Component {
    render(): React.ReactNode {
        return <div style={style.main}>
            <div style={style.content}>
                
            </div>
            <div style={style.sub}>

            </div>
        </div>
    }
}

export default Output