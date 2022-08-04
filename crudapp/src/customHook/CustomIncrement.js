import React, { useState } from 'react'

const CustomIncrement = () => {
    const [count, setCount] = useState(0);

    const handleSubmit = () => {
        setCount(count + 1)
    }

  return { 
    count,
    handleSubmit
  }
}

export default CustomIncrement