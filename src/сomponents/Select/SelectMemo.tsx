import React, {ChangeEvent, KeyboardEvent, useState, FocusEvent} from "react";
import { useEffect } from "react";
import styles from './selectMemo.module.css';

type itemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    items: itemType[]
    setFamily: (props: boolean) => void
    pumpum: boolean
    setNameValue: (name: string) => void
}

function SelectMemo(props: SelectPropsType) {

    const [hoveredElementValue, setHoveredElement]=useState(props.value)

      let myFamily =  [{title: 'Dashka', value: 1},
        {title: 'Yulya', value: 2}, {title: 'Romka', value: 3}]

    function onItemClick(title: string) {
        props.setNameValue(title);
        props.setFamily(!props.pumpum)
    }

    const selectedItem = props.items.find(t => t.value === props.value)
    const hoveredItem = props.items.find(t => t.value === hoveredElementValue)

    useEffect(()=> {
        setHoveredElement(props.value)
    }, [props.value])

    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>)=> {
        if(e.key === 'ArrowDown'|| e.key === 'ArrowUp'){
            for(let i = 0; i < props.items.length; i++){
                if (props.items[i].value===hoveredElementValue){
                    console.log(hoveredElementValue)
                    console.log(props.items[i].value)
                    const pretedentElement = e.key === 'ArrowDown' ? props.items[i+1] : props.items[i-1]
                    if(pretedentElement) {
                        console.log('kyky')
                        props.setNameValue(pretedentElement.title)
                        break
                    }
                }

            }
        }

        if(e.key === 'Enter' || e.key === 'Escape'){
            // props.setFamily(!props.pumpum)
        }

    }


    return (
        <>

            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0} >

                <h3 className={styles.main}  onClick={() => props.setFamily(!props.pumpum)}>{props.value}
                    <hr/>
                </h3>
                <div className={styles.items + '' + styles.active}>
                    {props.pumpum ? props.items.map(t => <div key={t.value}

                                                              onMouseEnter={()=>{setHoveredElement(t.value)}}
                                                              className={styles.item + ' ' + (hoveredItem === t ? styles.selected : '')}
                                                              onClick={() => {
                                                                  onItemClick(t.title)
                                                              }}>{t.title}</div>) : ''}
                </div>
            </div>
        </>
    )

}
