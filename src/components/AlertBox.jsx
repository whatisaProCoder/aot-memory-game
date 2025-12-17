import { useState } from "react";

function AlertBox({ header, subtext, onClose }) {
  const [fadeOut, setFadeOut] = useState(false);
  function onRestartClick() {
    setTimeout(() => {
      onClose();
    }, 300);
    setFadeOut(true);
  }

  return (
    <div
      className={`fixed h-full w-full backdrop-blur-2xl z-5 flex flex-row justify-center items-center fade-in ${
        fadeOut ? "fade-out" : ""
      }`}
    >
      <div className="max-w-[400px] m-4 bg-[#3535357b] backdrop-blur-2xl border border-[#616161bd] px-10 py-6 rounded-[1.25rem] flex flex-col gap-6 justify-center items-center">
        <div className="text-4xl max-sm:text-3xl">{header}</div>
        <div className="text-2xl max-sm:text-xl text-center">{subtext}</div>
        <button
          onClick={() => onRestartClick()}
          className="bg-[#e72121] transition-colors hover:bg-[#f83333] border-[#f86e6e] active:bg-[#da1515] active:border-[#eb3b3b] text-white text-2xl px-5 py-1 rounded-md border"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default AlertBox;
