import React from "react";

type UserType = {
    name: string
    age: number
}

type PhotoType = {
    screen: string
}

type HipHop<T> = T extends 'user' ? UserType :
    T extends 'photo' ? PhotoType : number


let a: HipHop<'user' | 'photo'> = {
    name: 'Max',
    age: 26,
}

a = { screen: 'Sea', }

let b: HipHop<'photo'> = {
    screen: 'Sea',
}