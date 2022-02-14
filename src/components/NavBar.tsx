import React from "react";

import './navBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

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
        margin: "auto",
        transition : "0.25s"
    },

    fIcon : {

    }
}

class NavBar extends React.Component {
    render : any = () => {
        return <div style={style.nav}>
            <a href="https://github.com/MrFreex" target="_blank">
                <h1 className="navTitle" style={style.navTitle}><FontAwesomeIcon style={style.fIcon} icon={faCode}></FontAwesomeIcon> CryPt0M4th</h1>
            </a>
        </div>
    }
}

export default NavBar;