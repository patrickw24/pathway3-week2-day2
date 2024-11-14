import { useState } from "react"


export const ComponentHome = () => {

    const [counter, setCounter] = useState( 10 )

    const clickHandler = ()=>{

        setCounter( counter +10 )

    }

    const decreaseHandler = ()=>{

        setCounter( counter -10 )

    }

    return (
        <>
            <h1>Home</h1>
            <p>The counter value {counter} </p>
            <button onClick={clickHandler} className="btn btn-primary" >+10</button>

            <button onClick={decreaseHandler} className="btn btn-danger" >-10</button>

        </>
    )

} 