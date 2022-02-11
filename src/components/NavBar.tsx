import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faCode } from '@fortawesome/free-solid-svg-icons'

const style : any = {
    nav : {
        position : "absolute",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        width : "100vw",
        height : "5vh",
        backgroundColor : "#363b45",
        textAlign : "center",
        zIndex : "999"
    },
    
    navTitle : {
        fontFamily : "Source Code Pro",
        fontWeight : 400,
        padding: "0",
        margin: "auto"
    },

    fIcon : {

    }
}

class NavBar extends React.Component {
    render : any = () => {
        return <div style={style.nav}>
            <h1 style={style.navTitle}><FontAwesomeIcon style={style.fIcon} icon={faCode}></FontAwesomeIcon> CryPt0M4th</h1>
        </div>
    }
}

export default NavBar;