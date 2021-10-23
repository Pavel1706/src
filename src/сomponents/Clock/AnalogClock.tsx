import { useState } from 'react';
import styles from  './AnalogClock.module.css';

type ClockType={
    date: Date
}

export const ClockAnalog:React.FC<ClockType> =({date}) => {
// const [date, setDate]=useState<Date>()


    let dateSec = date.getSeconds()

    let dateMin = date.getMinutes()

    let dateHours = date.getHours()
        console.log(dateSec)


    const secondsStyle = {
        transform: `rotate(${dateSec * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${dateMin * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${dateHours * 30}deg)`
    };
    return <>
        <div className={styles.clock}>
    <div className={styles["analog-clock"]}>
        <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
        <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
        <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
    </div>
    </div>
        </>
}