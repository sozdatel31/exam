import React, {useEffect, useState} from 'react';
import './App.css';
import Schet from "./Schet";
import Setting from "./Setting";
import {type} from "os";

function App() {

    let [minValue, setMinValue] = useState<number>(0)
    let [value, setValue] = useState<string | number>(minValue)
    useEffect(() => {
        let minValueStorage = localStorage.getItem('minValue')
        if (minValueStorage) {
            let newMinValue = JSON.parse(minValueStorage)
            setMinValue(newMinValue)
            setValue(newMinValue)
        }
    }, [])
    useEffect(() => {
        if (minValue >= 0) {
            localStorage.setItem('minValue', JSON.stringify(minValue))
        }
    }, [minValue])
    let [maxValue, setMaxValue] = useState<number>(10)
    useEffect(() => {
        let maxValueStorage = localStorage.getItem('maxValue')
        if (maxValueStorage) {
            let newMaxValue = JSON.parse(maxValueStorage)
            setMaxValue(newMaxValue)
        }
    }, [])
    useEffect(() => {
        if (maxValue >= 0) {
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
        }
    }, [maxValue])

    let [dis, setDis] = useState<boolean>(true) //кнопка set
    let [dis2, setDis2] = useState<boolean>(false) //кнопка yoyo
    let [dis3, setDis3] = useState<boolean>(false) //кнопка inc

    const disableCallback = () => {
        setDis(true)
        setValue(minValue)
        setDis2(false)
        setDis3(false)
    }

    const ainableCallback = (text: string) => {
        setValue(text)
        setDis(false)
        setDis2(true)
        setDis3(true)
    }

    function equallyCallback(text: string) {
        setValue(text)
        setDis(true)
        setDis2(true)
        setDis3(true)
    }

    function dobavka() {
        if (value < maxValue && typeof value === 'number')
            setValue(++value)
    }

    function reset() {
        setValue(minValue)
    }

    function changeMinValue(num: number) {
        setMinValue(num)
    }

    function changeMaxValue(num: number) {
        setMaxValue(num)
    }

    return <div>
        <Schet
            value={value}
            reset={reset}
            dobavka={dobavka}
            maxValue={maxValue}
            minValue={minValue}
            dis2={dis2}
            dis3={dis3}
        />
        <Setting
            equallyCallback={equallyCallback}
            changeMinValue={changeMinValue}
            changeMaxValue={changeMaxValue}
            minValue={minValue}
            maxValue={maxValue}
            disableCallback={disableCallback}
            ainableCallback={ainableCallback}
            dis={dis}
        />
    </div>
}

export default App;
