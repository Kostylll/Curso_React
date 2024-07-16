import React from 'react'

const Container = ({children, linguica}) => {
  return (
    <div>
        <h2>Título do Container</h2>
        {children}
        <p>Valor é : {linguica}</p>
    </div>
  )
}

export default Container