import React, { useState, useEffect, useRef } from 'react'
import './calculator.css'
// vanila tilt js import
import VanillaTilt from 'vanilla-tilt';

// Vanila tilt function 

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
}


export const Calculator = () => {
    // vanilla tilt parameters
    const options = {
        scale: 1.1,
        speed: 1900,
        max: 25,
    };
    // for setting current operant value
    const [current, setCurrent] = useState('')
    const [prevCurrent, setPrevCurrent] = useState('')
    const [operation, setOperation] = useState(undefined)

    const handleNumber = (event) => {
        let number = event.target.value;
        if (number === "." && current.includes(".")) {
            return
        }
        setCurrent(current.toString() + number.toString())

    }

    const handleOperation = (event) => {
        let op = event.target.value;
        if (op === '') {
            return
        } else {
            if (prevCurrent !== '') {
                let res = handleCompute()
                setPrevCurrent(res)
                setCurrent('')
                setOperation(op)
                return
            }
            setOperation(op)
            setPrevCurrent(current)
            setCurrent('')
    
        }
            
    }

    const handleDelete = () => {
        setCurrent(current.toString().slice(0, -1))
    }

    const handleAllClear = () => {
        setCurrent('')
        setPrevCurrent('')
        setOperation(undefined)
    }

    const handleEquals = () => {
        let res = handleCompute()
        setCurrent(res)
        setOperation(undefined)
        setPrevCurrent('')
    }

    // main compute function
    const handleCompute = () => {
        let computation
        const prev = parseFloat(prevCurrent)
        const cur = parseFloat(current)

        if (isNaN(prev) || isNaN(cur)) return
        switch (operation) {
            case '+':
                computation = prev + cur
                break
            case '-':
                computation = prev - cur
                break
            case '*':
                computation = prev * cur
                break
            case '/':
                computation = prev / cur
                break
            default:
                return
        }
        return computation

    }
    return (
        <section>
            <Tilt options={options}>
                <div className="calculator-grid">
                    <div className="output">
                        <div data-previous-operand className="previous-operand">{`${prevCurrent} ${operation === undefined ? '' : operation }`}</div>
                        <div data-current-operand className="current-operand">{current}</div>
                    </div>
                    <button onClick={handleAllClear} className="span-two">AC</button>
                    <button onClick={handleDelete}>DEL</button>
                    <button onClick={handleOperation} value="/">÷</button>
                    <button onClick={handleNumber} value="1">1</button>
                    <button onClick={handleNumber} value="2">2</button>
                    <button onClick={handleNumber} value="3">3</button>
                    <button onClick={handleOperation} value="*">x</button>
                    <button onClick={handleNumber} value="4">4</button>
                    <button onClick={handleNumber} value="5">5</button>
                    <button onClick={handleNumber} value="6">6</button>
                    <button onClick={handleOperation} value="+">+</button>
                    <button onClick={handleNumber} value="7">7</button>
                    <button onClick={handleNumber} value="8">8</button>
                    <button onClick={handleNumber} value="9">9</button>
                    <button onClick={handleOperation} value="-">-</button>
                    <button onClick={handleNumber} value=".">.</button>
                    <button onClick={handleNumber} value="0">0</button>
                    <button onClick={handleEquals} className="span-two">=</button>
                </div>
            </Tilt>
        </section>    
    )
}
