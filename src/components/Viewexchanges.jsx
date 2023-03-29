import React from 'react'

export default function Viewexchanges(props) {

    const deleteOne = (i) => {
        let temp = [...props.excheangeArr]
        temp.splice(i, 1)
        props.setExcheangeArr(temp)
    }

    const showExchanges = () => {
        return props.excheangeArr.map((val, i) => {
            return <div>
                <h5 style={{ color: 'blue', fontFamily: 'cursive' }}>Exchange number {i + 1}</h5>
                <h3 > From: {val[0].coinName} To: {val[1].coinName}</h3>
                <h4 style={{ fontFamily: 'sans-serif' }}>{val[2]}={val[3].toFixed(2)}</h4>
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
