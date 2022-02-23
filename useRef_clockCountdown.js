import { useRef, useState } from 'react'

function Content() {
    const [count, setCount] = useState(60);
    let timerId = useRef() // trả về 1 object có 1 attribute là current

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000)
    }

    const handleEnd = () => {
        clearInterval(timerId.current);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleEnd}>Stop</button>
        </div>
    )
}

export default Content