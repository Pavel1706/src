import React, {useState} from 'react'


type UserType = {
    firstName: string
    lastName: string
    age: number
}

type PhotoType = {
    large: string
    small: string
}

type ServerResponseType<D> = {
    errorCode: number
    messages: string []
    data: D
}

const response1: ServerResponseType<UserType> = {
    errorCode: 1,
    messages: ['HTML', 'CSS'],
    data: {
        firstName: 'Pavel',
        lastName: 'Radzishevskii',
        age: 32
    }
}
const response2: ServerResponseType<PhotoType> = {
    errorCode: 1,
    messages: ['HTML', 'CSS'],
    data: {
        large: 'http://yandex.ru/1.jpg',
        small: 'http://yandex.ru/2.jpg',
    }
}

type Nullable<T> = null | T

const initial = {
    age: 10,
    name: 'Lesha',
    user: null as Nullable<UserType>,
    photo: null as Nullable<PhotoType>,
}
type StateType = typeof initial

type CurrentActionsTypes = GetActionsTypes<typeof actions>

const reducer = (state: StateType = initial, action: CurrentActionsTypes) => {
    switch (action.type) {
        case "SET-AGE":
            return {...state, age: action.age}
        case "SET-NAMES":
            return {...state, name: action.firstName + ' ' + action.lastName}
    }


    return state
}
// type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

const obj = {
    a: {name: 'Pavel'},
    b: {age: 34},
    c: {site: {title: 'mail.ru'}},
}

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
let hipHop: ReturnType <PropertiesType<typeof actions>> = {type: 'SET-AGE', age: 15}
type GetActionsTypes <T> = ReturnType<PropertiesType<typeof actions>>;

const actions = {
    AC1: (age: number) => ({type: 'SET-AGE', age} as const),
    AC2: (firstName: string, lastName: string) => ({type: 'SET-NAMES', firstName, lastName} as const)
}


// const action1: AC1Type = {type: "SET-AGE", age:25}

type HipHop<T> = T extends 'user' ? UserType :
    T extends 'photo' ? PhotoType : number

// let a:'user'='user'   // variable a can only be 'user'
// a='user'

let a: HipHop<'user'> = {
    lastName: 'Popovich',
    age: 10,
    firstName: 'Lesha',
}

let b: HipHop<'photo'> = {
    large: 'http://yandex.ru/1.jpg',
    small: 'http://yandex.ru/2.jpg',
}