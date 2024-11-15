import { useState } from "react"

export const ComponentCalculator = () => {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const [multiply, setMultiplication] = useState(0)
    const [subtract, setSubtraction] = useState(0)
    const [divide, setDivision] = useState(0)

    const submitHandler = (event)=>{

        event.preventDefault()
        
        console.log(num1)
        console.log(num2)
        setResult( num1 + num2)
        
    }

    const multiplyEvent = (event)=>{
        
        setMultiplication (num1 * num2)
    }
    const subtractEvent = (event)=>{
        
        setSubtraction(num1 - num2)
    }

    const divideEvent = (event)=>{
        
        setDivision(num1 / num2)
    }

    const inputNum1OnChange = (event)=>{

        setNum1( parseFloat(event.target.value))

    }

    const inputNum2OnChange = (event)=>{

        setNum2(parseFloat(event.target.value))

    }

    return (
        <>
            <h1>Calculator</h1>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Number 1</label>
                    <input type="number" onChange={inputNum1OnChange} name="inputNum1" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Number 2</label>
                    <input onChange={inputNum2OnChange} type="number" name="inputNum2" className="form-control" />
                </div>
                <button  className="btn btn-primary" >+</button>
                <button onClick={multiplyEvent} type="button" className="btn btn-primary mx-2" >Multiply</button>
                <button  onClick={subtractEvent} type="button" className="btn btn-primary mx-2" >Subtract</button>
                <button  onClick={divideEvent} type="button" className="btn btn-primary mx-2" >Divide</button>
            </form>

            <p>Addition: {result} </p>
            <p>Multiplication: {multiply} </p>
            <p>Subtraction: {subtract} </p>
            <p>Division: {divide} </p>
        </>
    )

}