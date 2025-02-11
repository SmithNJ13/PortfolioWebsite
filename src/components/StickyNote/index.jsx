import React, {useState} from 'react'

const StickyNote = ({title, children, scale, rotation, onClick}) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative w-[18rem] h-[18rem] p-[1rem] m-[1rem] bg-yellow-200 text-black shadow-lg shadow-black rounded-md transition-all duration-300 transform ${
            isHovered ? `z-10 shadow-4xl shadow-black hover:cursor-pointer` : ""}`}
            style={{scale: isHovered ? `${scale}` : "", transform: isHovered ? `rotate(${rotation})` : "rotate(0deg)"}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}>
              <div className="w-full h-full overflow-hidden">
                <h2 className="text-xl align-center text-center font-bold w-full">{title}</h2>
                <div className="text-lg m-[1rem]">
                    {children}
                </div>
              </div>
    </div>
  )
}

export default StickyNote
