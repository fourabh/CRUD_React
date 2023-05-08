import {useState} from 'react'

const Counter = () => {
    console.log("function renders")
    const [number,setNumber] = useState(0);

    function handleClick(e) {
        e.stopPropagation()
        setNumber(number=>number+1)
        setNumber(number=>number+1)
        console.log(number)
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={handleClick} >click</button>

        </>
    )
}

export default Counter
