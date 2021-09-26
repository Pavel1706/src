import {ChangeEvent, useRef, useState} from "react";


export const GetValue= ()=> {
    const[value, setValue]= useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = ()=> {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    const el = inputRef.current as HTMLInputElement

    return<><input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value}</>
}

export const ControlledInput=()=>{
    const [parentValue, setParentValue]= useState('')
    const OnchangeInput=(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)
    }



        return <input value={parentValue} onChange={OnchangeInput}/>
}

export const ControlledCheckbox=()=>{

    const [parentValue, setParentValue]= useState(true)
    const OnchangeInput=(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)
    }



    return <input type='checkbox' checked={parentValue} onChange={OnchangeInput}/>
}


export const ControlledSelect=()=>{
    const [parentValue, setParentValue]= useState<string|undefined>(undefined)
    const OnchangeInput=(e:ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={OnchangeInput}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}