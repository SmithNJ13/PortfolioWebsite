import React, {useState, useEffect} from 'react'
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"; // Choose any Prism theme you like
import "prismjs/components/prism-javascript"; // Import the language you need

const CodeBlock = ({code}) => {
    const [show, setShow] = useState()

    function handleClick() {
        if(show === true) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
    Prism.highlightAll();
    }, [show]);

  return (
    <div className="flex flex-col sm:my-[1rem] sm:mx-[2rem] m-0 w-full justify-evenly items-evenly">
        <button className="bg-slate px-[4px] py-[8px] rounded w-max ml-[2rem] translate-y-[1rem] z-[3] underline hover:bg-zinc-800 hover:bg-opacity-90" onClick={handleClick}>Show Code</button>
        <div className="sm:text-[14px] text-[10px]">
            {show && (
                <pre className="relative bg-slate sm:w-max sm:max-w-[80%] w-[100%] p-[5px] rounded-[1rem] z-[5] overflow-auto border-stalelime border-[1px]">
                    <code className="language-javascript">
                        {code}
                    </code>
                </pre>
            )}
            {!show && (
                <div className="relative bg-slate w-[10rem] p-[5px] rounded-[1rem] z-[5] mt-[8px] overflow-auto border-stalelime border-[1px]" />
            )}
        </div>
    </div>
  )
}

export default CodeBlock
