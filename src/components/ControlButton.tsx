import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FI from '@fortawesome/free-solid-svg-icons'

import './ControlButton.css'

const style : any = {
    
}

const faStyle : any = {
    display: "inline-block",
    width: "100%",
    margin : "auto"
}

class ControlButton extends React.Component < { text: string, color : string, icon: typeof FI.faCoffee }, { hovered:boolean } > {
    constructor(props : any) {
        super(props)

        this.state = {
            hovered : false
        }
    }

    render(): React.ReactNode {
        return <button className="controlButton" style={{...style, ...{ background: this.props.color }}}
            onMouseEnter={() => this.setState({hovered:true})}
            onMouseLeave={() => this.setState({hovered:false})} >

            <div className="btnContent">
                <FontAwesomeIcon style={{...faStyle, ...{ textAlign: this.state.hovered ? "left" : "center" } }} icon={this.props.icon}></FontAwesomeIcon> { (this.state.hovered ? this.props.text : "") }
            </div>

            
        </button>
    }
}

export default ControlButton