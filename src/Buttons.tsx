import React from 'react';
import s from "./Schet.module.css";
import {SchetPropsType} from "./Schet";

function Buttons(props: SchetPropsType) {
    return (
        <div className={s.buttons}>
            <button className={s.butInc} onClick={props.dobavka} disabled={props.value > 4}>inc</button>
            <button className={s.butRes} onClick={props.reset} disabled={props.value < 1}>reset</button>
        </div>
    )
}

export default Buttons;
