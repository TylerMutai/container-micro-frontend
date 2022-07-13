import {mount} from 'helloReact/HelloReactApp'
import React, {useEffect, useRef} from 'react'

const HelloReactApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current)
    }, [])

    return <div ref={ref}/>
}

export default HelloReactApp