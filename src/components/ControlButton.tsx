import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FI from '@fortawesome/free-solid-svg-icons'

import './ControlButton.css'

const style : any = {
    
}

const faStyle : any = {
    display: "inline-block",
    margin : "auto"
}

class ControlButton extends React.Component < { onClick: React.MouseEventHandler<HTMLButtonElement>, text: string, color : string, icon: typeof FI.faCoffee }, { hovered:boolean } > {
    constructor(props : any) {
        super(props)

        this.state = {
            hovered : false
        }
    }

    render(): React.ReactNode {
        return <button onClick={this.props.onClick} className="controlButton" style={{...style, ...{ background: this.props.color }}}
            onMouseEnter={() => this.setState({hovered:true})}
            onMouseLeave={() => this.setState({hovered:false})} >

            <div className="btnContent" style={{
                display: "grid",
                gridTemplateColumns: (!this.state.hovered) ?  "100% auto" : "auto auto",
                transition: "0.2s"
            }}>
                <FontAwesomeIcon style={{...faStyle, ...{ textAlign: this.state.hovered ? "left" : "center" } }} icon={this.props.icon}></FontAwesomeIcon> { (this.state.hovered ? this.props.text : "") }
            </div>

            
        </button>
    }
}

export default ControlButton