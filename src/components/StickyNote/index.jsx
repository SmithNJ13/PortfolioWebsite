import React, {useState} from 'react'

const StickyNote = ({title, bulletOne = "", bulletTwo = "", bulletThree = "", rotation, posY, onClick}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`relative w-[16em] h-[16em] p-[1rem] bg-yellow-200 text-black shadow-lg shadow-black rounded-md transition-all duration-300 transform ${
            isHovered ? `z-10 shadow-4xl shadow-black hover:cursor-pointer` : ""}`}
            style={{scale: isHovered ? "115%" : "", transform: isHovered ? `rotate(${rotation})` : "rotate(0deg)", top: posY}}
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
