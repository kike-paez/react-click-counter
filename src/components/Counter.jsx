import React from 'react'
import '../style/Counter.css'

function Counter({ clickNum }) {
    return (
        <div className='counter'>
            {clickNum}
        </div>
    )
}

export default Counter