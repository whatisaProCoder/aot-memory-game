import backgroundImage from "../assets/images/background.png";
import LevelButton from "../components/LevelButton";

function HomePage() {
  return (
    <>
      <img
        src={backgroundImage}
        className="fixed h-full w-full object-fill z-[-1]"
      />
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col items-center bg-[#3535357b] backdrop-blur-2xl border-b border-[#323232] rounded-2xl outline-text px-10 py-6">
          <div className="text-6xl">Attack on Titan</div>
          <div className="mt-2 text-5xl text-[#66D96E]">Memory Game</div>
        </div>
        <div className="mt-8 flex flex-row items-center gap-4 bg-[#3535357b] backdrop-blur-2xl border-b border-[#323232] rounded-3xl outline-text p-4">
          <LevelButton
            text="Easy"
            onClick={() => alert("Easy Clicked!")}
            color="#45d138"
          />
          <LevelButton
            text="Medium"
            onClick={() => alert("Medium Clicked!")}
            color="#1c8bd0"
          />
          <LevelButton
            text="Hard"
            onClick={() => alert("Hard Clicked!")}
            color="#ce3737"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
