import "./style.css"
import TextAnimation from "../../components/TextAnimation";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import favicon from "../../assets/favicon.png"

const LandingPage = () => {
  const [complete, setComplete] = useState(false)

  return (
    <>
      <main className="mx-auto flex flex-col justify-center items-center h-screen">
        <img src={favicon} className="relative w-[150px] h-[150px] border-chalkboard border-[4px] rounded-[20rem] hover:border-white" style={{top: "-5%"}}></img>
      <section id="text" className="font-bold flex flex-row text-4xl">
        <TextAnimation onComplete={() => setComplete(true)}/>
      </section>
      <section>
        {!complete && <button className="w-[4rem] h-auto mt-[2rem] font-bold text-2xl border-b-[1px] border-transparent text-slate">_</button>}
      </section>
      <section>
        {complete && <Link to={"home"}><button className="w-[8rem] h-auto mt-[2rem] font-bold text-2xl text-lightemerald border-b-[1px] hover:text-white">E N T E R</button></Link>}
      </section>
    </main>
    </>
  );
}

export default LandingPage
