
import './App.css'
import {useState} from "react";
import Circle from "./components/Circle.tsx";

const App = () => {

    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    return (
        <>
            <div className="button-wrapper">
                <button type='button'>New numbers</button>
            </div>

            <div  className="container">
                {numbers.map((num, index) => (
                    <Circle key={index}  number={num} />
                ))}
            </div>
        </>

    )

};




export default App
