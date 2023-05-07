import React, {useState} from "react";
import "./App.css";

function App() {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
        console.log(a);
    }
    const onClickHandler2 = () => {
        setA(0);
        console.log(a);
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Change Number</button>
            <button onClick={onClickHandler2}>Reset</button>
        </div>
    );
}

export default App;
