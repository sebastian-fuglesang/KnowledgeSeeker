import React from 'react';
import { Input, Label } from 'trunx';
import "../KsInputField/styles.scss";

interface KsInputFieldProps {
    labelText: string
    type: string
}


export default function KsInputField({labelText, type}:KsInputFieldProps){

    return (
        <div className="KsInputField">
            <Label className="label">{labelText}</Label>
            <Input className="input" type = {type} />
        </div>
    )
}