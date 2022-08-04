import React from 'react'

const BlueCount = (props) => {
    return (
        <>
            <div>BlueCount</div>
            <div style={{background:'blue' , width : 100}}><props.cmp /></div>
        </>
    )
}

export default BlueCount