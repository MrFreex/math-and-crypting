import React from "react";
import ControlButton from "./ControlButton";

import * as FI from '@fortawesome/free-solid-svg-icons'

const style : any = {
    display: "flex"
}

let Controls = (props : any) => {
    const ret : any = [
        <ControlButton onClick={ () => props.cb("run")} text="Run" color="#4BDB6A" icon={FI.faPlay}></ControlButton>,
        <ControlButton onClick={ () => props.cb("stop")} text="Stop" color="#DB534B" icon={FI.faStop}></ControlButton>,
        <ControlButton onClick={ () => props.cb("step")} text="Step" color="#F0C839" icon={FI.faArrowRightLong}></ControlButton>
    ]

    return <div style={style}>
        {ret}
    </div>
}

export default Controls