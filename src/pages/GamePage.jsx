import backgroundImage from "../assets/images/background.webp";
import backIcon from "../assets/icons/back_icon.svg";
import { useState, useEffect } from "react";
import {
  getCharacterEndpointJSON,
  maxPageNumber,
  minPageNumber,
} from "../utils/API";
import {
  extractCharactersInfo,
  generateRandom,
  shuffleArray,
} from "../utils/helper";
import { LEVEL_CONFIG } from "../constants/levels";
import CharacterCard from "../components/CharacterCard";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import Storage from "../utils/storage";
import { useMediaQuery } from "react-responsive";

function GamePage({ levelID }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  console.log(isMobile);

  const navigate = useNavigate();

  const storage = Storage();

  const [loading, setLoading] = useState(true);

  const [reset, setReset] = useState(false);

  const [score, setScore] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  const [characterArray, setCharacterArray] = useState([]);

  const levelConfig = LEVEL_CONFIG.filter((level) => level.id === levelID)[0];

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 700);
    setBestScore(
      storage
        .getBestScores()
        .scores.filter(
          (scoreObject) => scoreObject.levelID === levelConfig.id
        )[0].score
    );
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCharacterEndpointJSON(generateRandom(maxPageNumber, minPageNumber))
      .then((json) => {
        return extractCharactersInfo(json);
      })
      .then((characterArray) => {
        return shuffleArray(characterArray);
      })
      .then((characterArray) => {
        return characterArray.slice(0, levelConfig.numberOfCells);
      })
      .then((characterArray) => {
        let newCharacterArray = [];
        characterArray.forEach((character) => {
          newCharacterArray.push({ ...character, clicked: false });
        });
        return newCharacterArray;
      })
      .then((characterArray) => {
        setCharacterArray(characterArray);
      });
  }, [levelID, levelConfig, reset]);

  function shuffle() {
    const newCharacterArray = [...shuffleArray(characterArray)];
    setCharacterArray(newCharacterArray);
  }

  function resetGame() {
    setScore(0);
    setReset(!reset);
  }

  function updateBestScore() {
    if (score > bestScore) {
      setBestScore(score);
      storage.setBestScores(levelConfig.id, score);
    }
  }

  function userClick(characterObject) {
    if (!characterObject.clicked) {
      setScore((score) => score + 1);
      const newCharacterArray = [...characterArray];
      newCharacterArray.find(
        (character) => character.id === characterObject.id
      ).clicked = true;
      setCharacterArray(newCharacterArray);
      if (score + 1 === levelConfig.numberOfCells) {
        updateBestScore();
        alert("You Won!");
        resetGame();
      }
      shuffle();
    } else {
      updateBestScore();
      alert(`You clicked ${characterObject.name} twice. Game Over!`);
      resetGame();
    }
  }

  return (
    <>
      <img
        src={backgroundImage}
        className="fixed h-full w-full object-cover z-[-1]"
      />
      <div
        className="flex flex-col items-center h-full transition-opacity hide-scrollbar"
        style={{ opacity: loading ? 0 : 1 }}
      >
        <div className="mt-8 flex flex-row justify-center gap-3 max-md:flex-col max-sm:w-full px-4">
          <div className="flex flex-row items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="bg-[#3535357b] transition-all hover:brightness-135 backdrop-blur-2xl border border-[#555555] rounded-full h-12 max-sm:h-11 aspect-square flex flex-row justify-center items-center"
            >
              <img
                src={backIcon}
                className="w-8 aspect-square pr-0.5 max-sm:w-6"
              />
            </button>

            <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] text-2xl max-sm:text-xl max-sm:w-full max-sm:text-center px-12 py-1.75">
              Attack on Titan
            </div>
            <div
              className="backdrop-blur-2xl border text-white border-[#555555] rounded-[1.25rem] text-2xl max-sm:text-xl px-8 py-1.75"
              style={{
                backgroundColor: levelConfig.color,
              }}
            >
              {levelConfig.name} {isMobile ? "" : "Mode"}
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] text-2xl max-sm:text-xl px-8 py-1.75 max-sm:px-0 max-md:flex-1 text-center">
              Best{isMobile ? "" : " Score"} : {bestScore}
            </div>
            <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] text-2xl max-sm:text-xl px-8 py-1.75 max-sm:px-0  max-md:flex-1 text-center">
              Score : {score}
            </div>
          </div>
        </div>
        <div className="mt-10 outline-text text-4xl max-md:text-3xl max-sm:text-2xl px-4 text-center">
          <span className="text-[#FF5757]">Rule</span> : Don’t click the same
          character twice!
        </div>
        <motion.div
          layout
          className="p-4 mt-10 grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${
              isMobile ? 3 : levelConfig.gridColumns
            }, 1fr)`,
          }}
          transition={{
            layout: {
              duration: 0.45,
            },
          }}
        >
          {characterArray.map((characterObject) => (
            <motion.div
              layout="position"
              key={characterObject.id}
              onClick={() => userClick(characterObject)}
            >
              <CharacterCard characterObject={characterObject} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default GamePage;
