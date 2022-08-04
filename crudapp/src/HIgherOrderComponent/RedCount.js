import React from 'react'
import BlueCount from './BlueCount'
import Counter from './Counter'

const RedCount = (props) => {
    return (
        <>
            <div>RedCount</div>
            <div style={{background:'red' , width : 100}}><props.cmp /></div>
            <BlueCount cmp={Counter} />
        </>
    )
}

export default RedCount