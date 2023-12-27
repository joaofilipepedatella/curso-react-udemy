import React from 'react'

const Container = ({ children, myValue }) => {
  return (
    <div>
        <h2>Este eh o titulo do Container</h2>
        {children}
        <p>O container tem um valor de: {myValue}</p>
    </div>
    
  )
}

export default Container