import React, {useState, useEffect} from 'react'
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"; // Choose any Prism theme you like
import "prismjs/components/prism-javascript"; // Import the language you need

const CodeBlock = ({language, code, description}) => {
    const [show, setShow] = useState()
    let lang
    switch(language) {
        case "javascript": {
            lang = "language-javascript"
        }
        case "jsx": {
            lang = "language-jsx"
        }
        case "css": {
            lang = "language-css"
        }
        case "html": {
            lang = "language-html"
        }
        case "python": {
            lang = "language-python"
        }
        case "c#": {
            lang = "language-csharp"
        }
        default:
            lang = "language-javascript"
    }

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
    <div>
        <button className="bg-slate px-[4px] py-[8px] rounded w-max ml-[2rem] translate-y-[1rem] z-[3] underline hover:text-azure hover:bg-zinc-800 hover:bg-opacity-90" onClick={handleClick}>Show Code</button>
        <div className="sm:text-[14px] text-[10px] w-[30rem]">
            {show && (
                <pre className="relative bg-slate p-[5px] rounded-[1rem] z-[5] overflow-auto border-stalelime border-[1px]">
                    <code className={lang}>
                        {code}
                    </code>
                </pre>
            )}
            {!show && (
                <div className="relative bg-slate w-[10rem] p-[5px] rounded-[1rem] z-[5] mt-[8px] overflow-auto border-stalelime border-[1px]" />
            )}
        </div>
        <div>
            <p className="mx-[1rem] mt-[1rem] w-[28rem]">{description}</p>
        </div>
    </div>
  )
}

export default CodeBlock
