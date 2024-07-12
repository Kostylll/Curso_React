import React from 'react'

const ExecuteFuncion = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Clique para executar</button>
    </div>
  )
}

export default ExecuteFuncion