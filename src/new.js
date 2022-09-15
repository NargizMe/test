// import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react'

function EffectTiming() {
   const timing = useRef();

    useEffect(() => {
        
        timing.current = setInterval(() => {
            console.log('COUNTER!!');
        }, 1000);  

    }, [])

    function stopInterval() {
        if (timing.current) {
            clearInterval(timing.current)
        }
    }

    return (<>
        <div>
            <button>Increase</button>
        </div>
        <div>
            <h1>{counter2}</h1>
            <button onClick={stopInterval}>Increase - 2</button>
        </div>
    </>
    )
}

export default EffectTiming
