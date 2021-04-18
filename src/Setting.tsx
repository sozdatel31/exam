import React, {ChangeEvent, useState} from 'react';
import s from './Schet.module.css';
import './App.css';
import Buttonn from "./Buttonn";

export type SettingPropsType = {
    minValue: number
    maxValue: number
    changeMinValue: (num: number) => void
    changeMaxValue: (num: number) => void
    disableCallback: () => void
    ainableCallback: (text: string) => void
    dis: boolean
    equallyCallback: (text: string) => void
}
type tabloPropsType = {
    value: number
    callback: (num: any) => void
    ainableCallback: (text: string) => void

}

function Setting({minValue, maxValue, changeMaxValue, changeMinValue, dis, disableCallback, ainableCallback, equallyCallback}: SettingPropsType) {




    const onChangeMinFunc = (e: ChangeEvent<HTMLInputElement>) => {
        changeMinValue(Number(e.currentTarget.value))
        switch (true) {
            case((Number(e.currentTarget.value)) < 0) :
                return  equallyCallback("incorrect value")
            case((Number(e.currentTarget.value)) >= maxValue) :
                return (equallyCallback('incorrect value'))
            default:
                 return ainableCallback('enter value')
        }
    }
    const onChangeMaxFunc = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValue(Number(e.currentTarget.value))
        switch (true) {
            case((Number(e.currentTarget.value)) < 0) :
                return (
                    equallyCallback("incorrect value")

                )
            case((Number(e.currentTarget.value)) <= minValue) :
                return (equallyCallback('incorrect value'))

            default:
                 return ainableCallback('enter value')
        }
    }

    return <div className={s.golova}>

        min Value: < Table value={minValue}
                           callback={onChangeMinFunc}
                           ainableCallback={ainableCallback}

    />
        max Value: < Table value={maxValue}
                           callback={onChangeMaxFunc}
                           ainableCallback={ainableCallback}
                           />
        <Buttonn title={"set"} disabl={dis} callback={disableCallback}/>

    </div>
}


function Table(props: tabloPropsType) {
    return (
        <div>
            <div style={{
                width: "100px",
                height: "10 px",
                background: "white",
                textAlign: "center"
            }}> {props.value}</div>
            <input type={"number"}
                   value={props.value}
                   onFocus={(e) => props.ainableCallback("enter value")}
                   onChange={props.callback}
            />

        </div>)
}


export default Setting;