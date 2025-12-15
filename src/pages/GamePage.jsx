import backgroundImage from "../assets/images/background.png";
import backIcon from "../assets/icons/back_icon.svg";

function GamePage() {
  return (
    <>
      <img
        src={backgroundImage}
        className="fixed h-full w-full object-cover z-[-1]"
      />
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-row justify-center items-center gap-3">
          <button className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-full h-12 aspect-square flex flex-row justify-center items-center">
            <img src={backIcon} className="w-8 aspect-square pr-0.5" />
          </button>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] text-2xl px-12 py-1.75">
            Attack on Titan
          </div>
          <div className="bg-[#044f047b] text-[#79FF6D] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] text-2xl px-8 py-1.75">
            Easy Mode
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] text-2xl px-8 py-1.75">
            Best Score : 4
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] text-2xl px-8 py-1.75">
            Score : 2
          </div>
        </div>
        <div className="mt-10 outline-text text-4xl">
          <span className="text-[#FF5757]">Rule</span> : Don’t click the same
          character twice!
        </div>
        <div className="mt-10 grid grid-cols-4 gap-4">
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-4 h-[150px] w-[200px]">
            <div className="h-full w-full bg-[#6969697a] rounded-[0.7rem]"></div>
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-4 h-[150px]">
            <div className="h-full w-full bg-[#6969697a] rounded-[0.7rem]"></div>
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-4 h-[150px]">
            <div className="h-full w-full bg-[#6969697a] rounded-[0.7rem]"></div>
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-4 h-[150px]">
            <div className="h-full w-full bg-[#6969697a] rounded-[0.7rem]"></div>
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-4 h-[150px]">
            <div className="h-full w-full bg-[#6969697a] rounded-[0.7rem]"></div>
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-4 h-[150px]">
            <div className="h-full w-full bg-[#6969697a] rounded-[0.7rem]"></div>
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-4 h-[150px]">
            <div className="h-full w-full bg-[#6969697a] rounded-[0.7rem]"></div>
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-4 h-[150px]">
            <div className="h-full w-full bg-[#6969697a] rounded-[0.7rem]"></div>
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-4 h-[150px]">
            <div className="h-full w-full bg-[#6969697a] rounded-[0.7rem]"></div>
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-4 h-[150px]">
            <div className="h-full w-full bg-[#6969697a] rounded-[0.7rem]"></div>
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-4 h-[150px]">
            <div className="h-full w-full bg-[#6969697a] rounded-[0.7rem]"></div>
          </div>
          <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-4 h-[150px]">
            <div className="h-full w-full bg-[#6969697a] rounded-[0.7rem]"></div>
          </div>
        </div>
      </div>

      <img />
    </>
  );
}

export default GamePage;
