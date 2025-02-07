import { useState, useEffect } from "react";

const ScrollTo = () => {
    const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const content = document.getElementById("content");
    if (!content) return;
    const handleScroll = () => {
      const atBottom = content.scrollTop >= content.scrollHeight - content.clientHeight;
      if (atBottom) {
        setShowScroll(true)
      }
    };
    content.addEventListener("scroll", handleScroll);
    return () => content.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showScroll && (
        <div id="scrollTop" className="bg-white bg-opacity-20 w-full h-max flex flex-col items-center py-[2px] mt-[2rem]">
            <button className="font-bold text-xl w-max" onClick={() => document.getElementById("content")?.scrollTo({ top: 0, behavior: "smooth" }, setShowScroll(false))}> ↑ ↑ ↑ </button>
            <button className="w-max font-bold" onClick={() => document.getElementById("content")?.scrollTo({ top: 0, behavior: "smooth" }, setShowScroll(false))}>RETURN</button>
        </div>
    )
  );
};

export default ScrollTo;
