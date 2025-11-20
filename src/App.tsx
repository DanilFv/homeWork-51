
import './App.css';
import {useState} from "react";
import Circle from "./components/Circle.tsx";

const App = () => {

    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const newNumbers = (): number[] => {
      const nums: number[] = [];

      while (nums.length < numbers.length) {
          const randomNum: number = Math.floor(Math.random() * 32) + 5;

          if (!nums.includes(randomNum)) nums.push(randomNum);
      }

      return nums.sort((a, b) => a - b);
    };

    const renderNumbers = () => {
        setNumbers(newNumbers());
    };


    return (
        <>
            <div className="button-wrapper">
                <button type='button' onClick={renderNumbers}>New numbers</button>
            </div>

            <div  className="container">
                {numbers.map((num: number,) => (
                    <Circle key={num}  number={num} />
                ))}
            </div>
        </>
    );

};

export default App
