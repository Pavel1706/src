import { useState } from "react"
import { useEffect } from "react"
import style from './clock.module.css';
import {ClockAnalog} from "./AnalogClock";


export const ClockDigital = () => {
    const [timerId, setTimerId] = useState<number>()
    const [date, setDate] = useState<Date>(new Date())

    function stopTime(){
        clearInterval(timerId)
    }

    console.log('SetTimeOutExample')

        useEffect(() => {
            const id: number = +setInterval(() => {
                setDate(new Date())
            }, 1000)
            setTimerId(id)
            return ()=> {
                debugger
                clearInterval(id)
            }
        }, [])


    const stringTime = date?.toLocaleTimeString()


    return <>
        <ClockAnalog date={date} />
        {/*<div>Hello, time: {stringTime}</div>*/}
        {/*<button onClick={StarTime}>START TIME</button>*/}
        <div className={style.clock__hand}>{stringTime}</div>
        <button onClick={stopTime}>STOP TIME</button>
        {/*<button onClick={() => setCounter(counter + 1)}>+++</button>*/}
        {/*<div> fake: {fake} </div>*/}
        {/*<button onClick={() => setFake(fake + 1)}>Fake+</button>*/}

    </>
}