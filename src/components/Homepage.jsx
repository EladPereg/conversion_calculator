import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Viewexchanges from './Viewexchanges'

export default function Homepage(props) {
    const [inp, setInp] = useState('')
    const [fromSelect, setFromSelect] = useState('')
    const [toSelect, setToSelect] = useState('')
    const [excheangeArr, setExcheangeArr] = useState([])
    const [viewFlag, setViewFlag] = useState(false)
    let total;
    const showOptions = () => {
        return props.coins.map((val) => {
            return <option value={val.coinValue}>{val.coinName}</option>
        })
    }
    const calc = () => {
        if (inp.length == 0 || fromSelect == '' || fromSelect == 'null' || toSelect == '' || toSelect == 'null') {
            alert('Please fill in all the fields')
        }
        else {

            if (fromSelect < toSelect) {
                let sum = fromSelect * inp
                total = sum / toSelect
                alert(`Your conversion value is ${total.toFixed(2)}`)
            }
            else {
                let sum = toSelect * inp
                total = sum * fromSelect
                alert(`Your conversion value is ${total.toFixed(2)}`)
            }
        }
        console.log(excheangeArr)
        let x = props.coins.find((val) => { return val.coinValue == fromSelect })
        let y = props.coins.find((val) => { return val.coinValue == toSelect })
        excheangeArr.push([x, y, inp, total])
        setExcheangeArr([...excheangeArr])
    }

    const view = () => {
        if (viewFlag === true) {
            if (excheangeArr.length == 0) {
                return <h1>No conversions to show yet</h1>
            }
            else {
                return <Viewexchanges setExcheangeArr={setExcheangeArr} excheangeArr={excheangeArr} />
            }
        }
    }

    return (
        <div>
            <h1>Conversion calculator</h1>
            <input id='homePageInp' onChange={(e) => { setInp(e.target.value) }} type='number' placeholder='type your conversion value' /> <br />
            From: <select className='selectsHome' onChange={(e) => { setFromSelect(e.target.value) }} >
                <option value='null'>choose coin</option>
                {showOptions()}
            </select> <br />
            To: <select className='selectsHome' onChange={(e) => { setToSelect(e.target.value) }}>
                <option value='null'>choose coin</option>
                {showOptions()}
            </select > <br />
            <button id='calcBtn' onClick={() => { calc() }}>Calculate</button> <br />
            <div>
                <Link to='/update'><button className='btns'>go to update page</button></Link>
                <button className='btns' onClick={() => { setViewFlag(!viewFlag) }}>view your all exchanges</button>
            </div>
            {view()}
        </div>
    )
}
