import {mount} from 'helloReact/HelloReactApp'
import React, {useEffect, useRef} from 'react'

let historyUnListener
const HelloReactApp = ({history}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (historyUnListener)
            historyUnListener();
        historyUnListener = history.listen(() => {
            mount(ref.current)
        })
        mount(ref.current)
    }, [history])

    return <div ref={ref}/>
}

export default HelloReactApp