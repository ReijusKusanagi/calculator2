import { useState } from 'react';
import './App.css'

function CalcDisplay({dispValue}){
  return (
    <div className='Display'>
     {dispValue}
    </div>    
  )
}

function CalcButton({buttonLabel, buttonClassName = "", onClick}) {
  return (
    <button className={`Button ${buttonClassName}`.trim()} onClick={onClick}>
      {buttonLabel}
    </button>
  );
}


function App() {

  const[disp, setDisp] = useState(0);
  const[operand1, setOperand1] = useState(null);
  const[operand2, setOperand2] = useState(null);
  const[operation, setOperation] = useState(null);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp(value);
  }

  const nameplateButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp("Jeirus Kahlil T. Cruz");
  }

  const clearButtonClickHandler = (e) => {
    e.preventDefault();
    setDisp(0);
    setOperand1(null);
    setOperand2(null);
    setOperation(null);
  }

  const equalButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if(operation === "+"){
      setDisp(parseInt(operand1) + parseInt(operand2));
    } else if(operation === "-") {
      setDisp(parseInt(operand1) - parseInt(operand2));
    } else if(operation === "*") {
      setDisp(parseInt(operand1) * parseInt(operand2));
    } else if(operation === "÷") {
      setDisp(parseInt(operand1) / parseInt(operand2));
    }
  }

  const operationButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOperation(value);
    setDisp(value);
}

  const numButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    // alert(value + "|" + operand1 + "|" + operand2 + "|" + operation);
    console.log(value + "|" + operand1 + "|" + operand2 + "|" + operation);
  if(operation === null){
    if(operand1 === null){
      setDisp(value);
      setOperand1(value);
    } else {
      setDisp(operand1 + value);
      setOperand1(operand1 + value);
  }
} else {
  if(operand2 === null){
      setDisp(value);
      setOperand2(value);
    } else {
      setDisp(operand2 + value);
      setOperand2(operand2 + value);
}
}
}

  return (
    <div className="App">
      <div className="Header">
        Calculator of Jeirus Kahlil Cruz - IT3A
      </div>
      <div className="Calculator">
        <CalcDisplay dispValue={disp}/>
        <div className="Keypad">
          <CalcButton buttonLabel="7" onClick = {numButtonClickHandler}/>
          <CalcButton buttonLabel="8" onClick = {numButtonClickHandler}/>
          <CalcButton buttonLabel="9" onClick = {numButtonClickHandler}/>
          <CalcButton buttonLabel="÷" buttonClassName="opButton" onClick = {operationButtonClickHandler}/>

          <CalcButton buttonLabel="4" onClick = {numButtonClickHandler}/>
          <CalcButton buttonLabel="5" onClick = {numButtonClickHandler}/>
          <CalcButton buttonLabel="6" onClick = {numButtonClickHandler}/>
          <CalcButton buttonLabel="*" buttonClassName="opButton" onClick= {operationButtonClickHandler}/>

          <CalcButton buttonLabel="1" onClick = {numButtonClickHandler}/>
          <CalcButton buttonLabel="2" onClick = {numButtonClickHandler}/>
          <CalcButton buttonLabel="3" onClick = {numButtonClickHandler}/>
          <CalcButton buttonLabel="-" buttonClassName="opButton" onClick = {operationButtonClickHandler}/>

          <CalcButton buttonLabel="C" buttonClassName="clrButton" onClick = {clearButtonClickHandler}/>
          <CalcButton buttonLabel="0" onClick = {numButtonClickHandler}/>
          <CalcButton buttonLabel="=" buttonClassName="eqButton" onClick = {equalButtonClickHandler}/>
          <CalcButton buttonLabel="+" buttonClassName="opButton" onClick = {operationButtonClickHandler}/>
        </div>
        <CalcButton buttonLabel="Jeirus Kahlil T. Cruz" buttonClassName="nameButton" onClick = {nameplateButtonClickHandler}/>
      </div>
    </div>
  );
}

export default App;