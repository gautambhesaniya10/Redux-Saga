import React from 'react'
import CustomIncrement from './CustomIncrement';
import UseCustomApi from './UseCustomApi';

const CustomHookDemo = () => {
    const [data] = UseCustomApi("https://jsonplaceholder.typicode.com/todos");
    const countData = CustomIncrement();
    return (
        <>
        <div>
            <h1>{countData.count}</h1>
            <button onClick={countData.handleSubmit}>Increment</button>
        </div>
        <br />
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
    )
}

export default CustomHookDemo