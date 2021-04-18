import React from 'react';
import s from "./Schet.module.css";
import {SchetPropsType} from "./Schet";

type Butt = {
    title: string
    disabl: boolean
    callback: () => void
}

function Buttonn(props: Butt) {

    // const provv = props.value<5? props.dobavka : props.reset
    // const dizz = props.value<6? false : true
    return (
        <div className={s.buttons}>
            <button onClick={props.callback} disabled={props.disabl}>{props.title}</button>
        </div>
    )


}

export default Buttonn;
