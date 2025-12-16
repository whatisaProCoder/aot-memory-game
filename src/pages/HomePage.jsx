import { useEffect } from "react";
import backgroundImage from "../assets/images/background.webp";
import Footer from "../components/Footer";
import LevelButton from "../components/LevelButton";
import { Link } from "react-router-dom";
import Storage from "../utils/storage";

function HomePage() {
  const storage = Storage();
  useEffect(() => {
    storage.initialiseScoreObject();
    console.log("storage initialized");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <img
        src={backgroundImage}
        className="fixed h-full w-full object-cover z-[-1]"
      />
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col items-center bg-[#3535357b] backdrop-blur-2xl border-b border-[#323232] rounded-2xl outline-text px-10 py-6">
          <div className="text-6xl max-sm:text-4xl">Attack on Titan</div>
          <div className="mt-2 text-5xl max-sm:text-3xl text-[#66D96E]">
            Memory Game
          </div>
        </div>
        <div className="mt-8 max-sm:mt-24 flex flex-row max-sm:flex-col items-center gap-4 bg-[#3535357b] backdrop-blur-2xl border-b border-[#323232] rounded-3xl p-4">
          <Link to="/easy-mode" className="w-full">
            <LevelButton text="Easy" color="#45d138" />
          </Link>
          <Link to="/medium-mode" className="w-full">
            <LevelButton text="Medium" color="#1c8bd0" />
          </Link>
          <Link to="/hard-mode" className="w-full">
            <LevelButton text="Hard" color="#ce3737" />
          </Link>
        </div>
        <div className="fixed bottom-0 left-0 right-0 flex flex-row justify-center">
          <div className="w-[400px]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
