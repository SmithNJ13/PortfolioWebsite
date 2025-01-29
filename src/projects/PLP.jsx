import React from 'react'

const PLP = ({returnState}) => {
  const string = "🡼"
  return (
    <div>
      <main id="mainBody" className="mx-auto text-stalelime flex flex-col justify-center items-center h-screen overflow-hidden py-[1rem]">
        <div id="content" className="overflow-y-scroll bg-sherwood rounded-2xl border-[1px] border-stalelime w-[55vw] my-[1rem] py-[2rem]">
          <h2 className="text-4xl text-stalelime hover:text-ivory hover:cursor-pointer hover:bg-zinc-800 rounded-[10rem] bg-slate w-min h-min p-[3px] mx-[0.5rem] mt-[-1.5rem] text-center justify-center align-center self-center" onClick={returnState}>{string}</h2>
          <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[2rem]"></section>
        </div>
      </main>
    </div>
  )
}

export default PLP
