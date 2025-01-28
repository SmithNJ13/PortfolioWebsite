import React from 'react'

const SzndChef = ({returnState}) => {
  const string = "🡼"
  return (
    <div>
      <h2 className="text-4xl text-white hover:underline hover:cursor-pointer" onClick={returnState}>{string}</h2>
      <h1 className="text-white underline">SzndChef!</h1>
    </div>
  )
}

export default SzndChef
