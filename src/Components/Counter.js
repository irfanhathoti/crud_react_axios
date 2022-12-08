import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const Increase = () => {
        setCount(count + 1)
    }
    const Decrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }


    return (
        <div>
            <h2>
                {
                    count
                }
            </h2>
            <button onClick={Increase} className='btn btn-success'>
                Increase
            </button>
            <button onClick={Decrease} className='btn btn-danger'>Decrease</button>


        </div>
    )
}

export default Counter