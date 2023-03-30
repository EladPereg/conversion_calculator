import React from 'react'

export default function Viewexchanges(props) {

    const deleteOne = (i) => {
        let temp = [...props.arr]
        temp.splice(i, 1)
        props.setArr(temp)
    }

    const showExchanges = () => {
      return props.arr.map((val,i)=>{
        return <div>
            <h5 style={{ color: 'blue', fontFamily: 'cursive' }}>Exchange number {i + 1}</h5>
           <h3 > From: {val.a} To: {val.b}</h3>
           <h4 style={{ fontFamily: 'sans-serif' }}>{val.inp}={val.total.toFixed(2)}</h4>
           <button style={{ borderRadius: '25px', backgroundColor: 'transparent' }} onClick={() => { deleteOne(i) }}>Delete exchange</button>
        </div>
      })
    }
    return (
        <div>
            {showExchanges()}
        </div>
    )
}