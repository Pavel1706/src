import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './сomponents/Rating/Rating'
import {Uncontrolledaccordion} from "./сomponents/Uncontrolledaccordion/Uncontrolledaccordion";
import {UncontrolledOn_Off} from './сomponents/UncontrolledOn/UnControlledOn_Off'
import { Accordion} from "./сomponents/accordion/Accordion";
import {Select} from "./сomponents/Select/Select";
import { LikeUseCallback} from "./UseMemoUseCallBack";
import {SelectMemo} from "./сomponents/Select/SelectMemo";
import {Example2} from "./UseState";
import {SetTimeOutExample, } from "./UseEffect";
import { ClockDigital} from "./сomponents/Clock/ClockDigital";
import {ClockAnalog} from "./сomponents/Clock/AnalogClock";


export function App() {
    console.log('App rendering')

    type SetOnType = false | true
    let [ratingValue, SetRatingValue] = useState<RatingValueType>(4)
    let [collapsedAccordion, setAccordion] = useState<boolean>(false)
    let [on, setOn] = useState<SetOnType>(false)
    let [family, setFamily] = useState<boolean>(false)
    let [nameValue, setNameValue] = useState<string | null>('My family')
    const [date, setDate] = useState<Date>()



    return (
        <div className={'App'}>
            <UncontrolledOn_Off value={on} setOn={setOn}/>
            <Uncontrolledaccordion titleValue={'Menu'} setAccordion={setAccordion} value={collapsedAccordion}/>
            <Accordion titleValue={'Users'} collapsed={false} items={[{title: 'Pavel', value: 1},
                {title: 'Dashka', value: 2},
                {title: 'Yulya', value: 3},
                {title: 'Romka', value: 4}]}
                       onClick={(title) => alert(`user with ${title} will be happy`)}/>
            <Select value={nameValue}
                    setNameValue={setNameValue}
                    pumpum={family}
                    setFamily={setFamily}

                    items={[{title: 'Dashka', value: 1},
                        {title: 'Yulya', value: 2}, {title: 'Romka', value: 3}]}/>

            <Rating value={ratingValue} onClick={SetRatingValue}/>

            {/*<Example1/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<DifficultCountingExample/>*/}
            {/*<HelpsToReactMemo/>*/}
            <SelectMemo />
           <LikeUseCallback/>
            <Example2/>
            {/*<SimpleExample/>*/}
            {/*<SetTimeOutExample/>*/}
            <ClockDigital />


        </div>
    )
}



