
import React, {useState, useEffect} from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div className="Counter componentBox">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click Me!</button>
            <button onClick={() => setCount(count ==0)}>Reset Me!</button>

            {/* how could we make a reset button to reset the count back to zero? */}
        </div>
    )
}

export default Counter