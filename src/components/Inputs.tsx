import React from "react";

interface thisProps {

}

const style : any = {
    input : {
        borderRadius : "8px",
        height : "3vh",
        border : "none",
        fontFamily : "Source Code Pro",
        background : "#363B45",
        color : "#fff",
        lineHeight : "80%",
        paddingLeft : "1vh"
    },

    inputblock : {
        display : "grid",
        gridTemplateRows : "auto auto",
        gridTemplateColumns : "auto",
        width : "100%",
        marginBottom : "1vh"
    },

    label : {
        textAlign : "left",
        marginBottom : "0.6vh",
        fontFamily : "Source Code Pro"
    }
}

class Inputs extends React.Component < thisProps > {

    getInput = (placeHolder : string, upperLabel : string) => {
        return <div style={style.inputblock}>
            <span style={style.label}>{ upperLabel }</span>
            <input style={style.input} type="text" placeholder={placeHolder}></input>
        </div>
    }

    render(): React.ReactNode {
        return <div>
            { [
                this.getInput("Meet me at elephant lake","String"),
                this.getInput("", "Public Key"),
                this.getInput("", "Private Key")
            ] }
        </div>
    }
}

export default Inputs;