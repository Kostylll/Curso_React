import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Título do Container</h2>
        {children}
        <p>Valor é : {myValue}</p>
    </div>
  )
}

export default Container