import React from 'react'
import { useExampleContext } from '../hooks/useExampleContext';

export default function Component2() {
    const {text, number} = useExampleContext()
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Componente 2</h1>
            {text}
            <br />
            {number}
        </div>
    )
}
