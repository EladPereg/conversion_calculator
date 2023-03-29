import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Update(props) {
    const [text, setText] = useState('')
    const [number, setNumber] = useState('')
    const showTable = () => {
        return props.coins.map((val) => {
            return <tr>
                <td style={{ border: '4px black solid', fontFamily: 'cursive', fontSize: '20px' }}>{val.coinName}</td>
                <td style={{ border: '4px black solid', fontFamily: 'cursive', fontSize: '20px' }}>{val.coinValue}</td>
            </tr>
        })
    }

    const check = () => {
        let num = Number(number)
        let newStr = text.toLowerCase()
        if (text.length == 0 || number.length == 0) {
            alert('please fill al the fields')
        }
        else if (!(/^[A-Za-z\s]*$/.test(text))) {
            alert('name can contain only letters')
        }
        else if (number != num) {
            alert('please enter only digits')
        }
        else {
            const elemnt1=document.getElementById('inp1')
            elemnt1.value=''
            const elemnt2=document.getElementById('inp2')
            elemnt2.value=''
            props.addNewCoin(newStr, number)
        }
    }
    return (
        <div>
            <h1>here you can change the value of the coins and olso add a new coins</h1>
            <table style={{ marginLeft: '35%', width: '450px', height: '200px', border: '2px black solid', borderCollapse: 'collapse' }}>
                <tr>
                    <td style={{ border: '4px black solid', fontFamily: 'cursive', fontSize: '25px' }}>Type</td>
                    <td style={{ border: '4px black solid', fontFamily: 'cursive', fontSize: '25px' }}>Value</td>
                </tr>
                {showTable()}
            </table> <br />
            <input id='inp1'  className='upsateInps' onChange={(e) => { setText(e.target.value) }} type='text' placeholder='Enter coins name' /> <br />
            <input id='inp2'  className='upsateInps' onChange={(e) => { setNumber(e.target.value) }} type='text' placeholder='Enter coins value' /> <br />
            <button id='updateBtn' onClick={() => {check() }}>Update / Add</button> <br />
            <Link to='/'><button style={{width:'80px',marginTop:'80px',height:'25px',borderRadius:'30px',backgroundColor:'burlywood',fontFamily:'cursive'}} >back</button></Link>
        </div>
    )
}
