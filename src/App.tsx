import React from 'react';
import './App.css';
import {MouseEvent} from "react";
import {Button} from "./button_microtask/Button";

function App() {


    const FunctForButton1 = (anytext: string, words: string) => {
        console.log(anytext, words)
    }
    const FunctForButton2 = (anytext: string) => {
        console.log(anytext)
    }

    const FunctForButton3 = () => {
        console.log('I am button')
    }

    return (
        <div className="App">
            <Button title='Button 1' callback={() => FunctForButton1('1', 'YES')}/>
            <Button title='Button 2' callback={() => FunctForButton2('2')}/>
            <Button title='Button 3' callback={FunctForButton3}/>
        </div>
    );
}

export default App;
