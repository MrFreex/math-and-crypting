import React from "react";
import ControlButton from "./ControlButton";

import * as FI from '@fortawesome/free-solid-svg-icons'

const style : any = {
    display: "flex"
}

let Controls = (props : any) => {
    const ret : any = [
        <ControlButton text="Avvia" color="#4BDB6A" icon={FI.faPlay}></ControlButton>,
        <ControlButton text="Stop" color="#DB534B" icon={FI.faStop}></ControlButton>,
        <ControlButton text="Passo" color="#F0C839" icon={FI.faArrowRightLong}></ControlButton>
    ]

    return <div style={style}>
        {ret}
    </div>
}

export default Controls