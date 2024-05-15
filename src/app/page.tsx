"use client"
import { useState } from "react";

const Calculator = () => {
  const [num1] = useState(10);
  const [num2] = useState(20);
  const [result, setResult] = useState(num1 + num2);

  const addition = () => {
    setResult(num1 + num2);
  };

  const subtraction = () => {
    setResult(num1 - num2);
  };

  const multiplication = () => {
    setResult(num1 * num2);
  };

  const division = () => {
    setResult(num1 / num2);
  };

  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-black mb-8">Calculator</h1>
      <div className="flex justify-center items-center mb-12">
        <div className="mr-8">
          <h1 className="text-9xl font-bold text-black">{num1}</h1>
          <h1 className="text-9xl font-bold text-black">{num2}</h1>
        </div>
        <div className="flex flex-col">
          <button className="text-4xl m-2 font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-full p-4 transition duration-300" onClick={addition}>
            +
          </button> 
          <button className="text-4xl m-2 font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-full p-4 transition duration-300" onClick={subtraction}>
            -
          </button> 
          <button className="text-4xl m-2 font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-full p-4 transition duration-300" onClick={multiplication}>
            x
          </button> 
          <button className="text-4xl m-2 font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-full p-4 transition duration-300" onClick={division}>
            /
          </button> 
        </div>
      </div>
      <h1 className="text-9xl font-bold text-black">Result: {result}</h1>
    </div>
  );
};

export default Calculator;
