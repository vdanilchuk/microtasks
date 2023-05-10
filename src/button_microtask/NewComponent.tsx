import React from "react";
import {FilterValueType} from "../App";

type NewComponentType = {
    currentMoney: CurrentMoneyType[]
    callback: (buttonName: FilterValueType) => void;
}

type CurrentMoneyType = {
    banknotes: string
    value: number
    number: string
}

export const NewComponent = (props: NewComponentType) => {

    return <>
        <ul>
            {props.currentMoney.map((el, index) => {
                return <li key={index}>
                    <span>{el.value}</span>
                    <span>{el.banknotes}</span>
                    <span>{el.number}</span>
                </li>
            })}
        </ul>
        <button onClick={() => props.callback("Rubles")}>Rubles</button>
        <button onClick={() => props.callback("Dollars")}>Dollars</button>
        <button onClick={() => props.callback("All")}>All</button>
        {/*<button >Dollars</button>*/}
        {/*<button >All</button>*/}
        {/*<Button name={"Rubles"} callback={() => onClickHandler("Rubles")}/>*/}
        {/*<Button name={"Dollars"} callback={() => onClickHandler("Dollars")}/>*/}
        {/*<Button name={"All"} callback={() => onClickHandler("All")}/>*/}

    </>

}
