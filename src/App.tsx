import React from 'react';
import './App.css';
import {MouseEvent} from "react";

function App() {

    // const MyFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Button')
    // }
    // const MySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Button 2')
    // }

    const onClickHandler = (name:string) => {
        console.log(`Hello ${name}`)
    }

    const clickOnButton3 = (event: MouseEvent<HTMLButtonElement>) =>{
        console.log('Click on 3')
    }

    const clickOnButton4 = (title:string) =>{
        console.log(title)
    }

    return (
        <div className="App">
            {/*<button onClick={(event)=>{console.log('Hello')}}>MyButton</button>*/}
            <button onClick={()=>onClickHandler('Button 1')}>Subscribe</button>
            <button onClick={()=>onClickHandler('Button 2')}>Subscribe 2</button>
            <button onClick={clickOnButton3}>Button 3</button>
            <button onClick={()=>clickOnButton4('Click on 4')}>Button 4</button>
        </div>
    );
}

export default App;
