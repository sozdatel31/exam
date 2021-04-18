import React from 'react';
import s from './Schet.module.css';
import './App.css';
import Buttons from "./Buttons";
import Buttonn from "./Buttonn";

export type SchetPropsType = {
    value: number | string
    reset: () => void
    dobavka: () => void
    maxValue: number
    minValue: number
    dis2: boolean
    dis3: boolean
}
type tabloPropsType = {
    value: number | string
    maxValue: number
}

function Schet({value, reset, dobavka, maxValue, minValue, dis2, dis3}: SchetPropsType) {

    return <div className={s.golova}>

        < Table
            value={value}
            maxValue={maxValue}
        />
        {/*<Buttons*/}
        {/*    value={value}*/}
        {/*    reset={reset}*/}
        {/*    dobavka={dobavka}*/}
        {/*/>*/}
        <Buttonn title={"reset"} disabl={value === minValue || dis2} callback={reset}/>
        <Buttonn title={"inc"} disabl={value >= maxValue || dis3} callback={dobavka}/>
    </div>
}

function Table(props: tabloPropsType) {
    const inputClass = props.value >= props.maxValue ? s.redd : s.black
    return (
        <div className={inputClass}>{props.value}</div>
    )
}


export default Schet;
