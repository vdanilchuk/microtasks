import React from "react";
// import "./App.css";
// import {NewComponent} from "./NewComponent";
//
// export type FilterValueType = "Rubles" | "Dollars" | "All"
//
// function App1() {
//     const [money, setMoney] = useState([
//         {banknotes: "Rubles", value: 100, number: " a1234567890"},
//         {banknotes: "Dollars", value: 50, number: " z1234567890"},
//         {banknotes: "Rubles", value: 100, number: " w1234567890"},
//         {banknotes: "Dollars", value: 100, number: " e1234567890"},
//         {banknotes: "Dollars", value: 50, number: " c1234567890"},
//         {banknotes: "Rubles", value: 100, number: " r1234567890"},
//         {banknotes: "Dollars", value: 50, number: " x1234567890"},
//         {banknotes: "Rubles", value: 50, number: " v1234567890"},
//     ])
//
//     const [filterValue, setFilterValue] = useState<FilterValueType>("All")
//
//     let currentMoney = money;
//
//     if (filterValue === "Rubles") {
//         currentMoney = money.filter(el => el.banknotes === "Rubles")
//     }
//
//     if (filterValue === "Dollars") {
//         currentMoney = money.filter(el => el.banknotes === "Dollars")
//     }
//
//     const onClickHandler = (buttonName: FilterValueType) => {
//         console.log(buttonName)
//         setFilterValue(buttonName)
//     }
//
//     return (
//         <NewComponent currentMoney={currentMoney} callback={onClickHandler} />
//     );
// }
//
// export default App;
