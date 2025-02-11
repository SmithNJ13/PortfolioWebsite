import React, {useState} from 'react'

const StickyNote = ({title, bulletOne = "", bulletTwo = "", bulletThree = "", scale, rotation, onClick}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`relative w-[16em] h-[16em] p-[5px] m-[1rem] bg-yellow-200 text-black shadow-lg shadow-black rounded-md transition-all duration-300 transform ${
            isHovered ? `z-10 shadow-4xl shadow-black hover:cursor-pointer` : ""}`}
            style={{scale: isHovered ? `${scale}` : "", transform: isHovered ? `rotate(${rotation})` : "rotate(0deg)"}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}>
              <div>
                <h2 className="text-xl align-center text-center font-bold w-full">{title}</h2>
                <div className="text-lg ml-[1rem] my-[1rem]">
                    <li>{bulletOne}</li>
                    <li>{bulletTwo}</li>
                    <li>{bulletThree}</li>
                </div>
              </div>
    </div>
  )
}

export default StickyNote
