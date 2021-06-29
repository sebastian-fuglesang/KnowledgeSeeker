import React from 'react';
import { Input, Label } from 'trunx';
import "../KsInputField/styles.scss";


export default function KsInputField(props: any){


    return (
        <div className="KsInputField">
            <Label className="label">{props.labelText}</Label>
            <Input className="input" style={{'width' : '33%'}} type = {props.type} /> {/*Får ikke til å justere bredden til input med klassenavn og stylesheet */}
        </div>
        

    )

}