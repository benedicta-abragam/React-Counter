import { useState } from "react"
import "./App.css"

function Components() {

    const [count, setcount] = useState(0)

    function Increment() {
        setcount(count + 1)
    }
    function Decrement() {
        setcount(count - 1)
    }
    function Reset() {
        setcount(0)
    }


    return (
        <div className="container">
           
            {count === 0 ? (<p>Minimum limit reached</p>) : (<h1>{count}</h1>)}

            <div className="btn">
                <button className="inc" onClick={Increment}>Increment</button>
                <button className="dec" onClick={Decrement}>Decrement</button>
                <button className="reset" onClick={Reset}>Reset</button>
            </div>

        </div>



    )
}

export default Components