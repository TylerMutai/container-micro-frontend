import {mount} from 'helloReact/HelloReactApp'
import React, {useEffect, useRef} from 'react'

let historyUnlistener
const HelloReactApp = ({history}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (historyUnlistener)
            historyUnlistener();
        historyUnlistener = history.listen(() => {
            mount(ref.current)
        })
        mount(ref.current)
    }, [history])

    return <div ref={ref}/>
}

export default HelloReactApp