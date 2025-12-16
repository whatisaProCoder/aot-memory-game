import backgroundImage from "../assets/images/background.png";
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
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function GamePage({ levelID }) {
  const [score, setScore] = useState(0);

  const [characterArray, setCharacterArray] = useState([]);

  const levelConfig = LEVEL_CONFIG.filter((level) => level.id == levelID)[0];

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
  }, [levelID, levelConfig]);

  function userClick(characterObject) {
    if (!characterObject.clicked) {
      setScore((score) => score + 1);
      characterObject.clicked = true;
    } else {
      alert("Game Over!");
      setScore(0);
      characterArray.forEach((character) => (character.clicked = false));
    }
    const newCharacterArray = [...shuffleArray(characterArray)];
    setCharacterArray(newCharacterArray);
  }

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
            Score : {score}
          </div>
        </div>
        <div className="mt-10 outline-text text-4xl">
          <span className="text-[#FF5757]">Rule</span> : Don’t click the same
          character twice!
        </div>
        <motion.div
          layout
          className="mt-10 grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${levelConfig.gridColumns}, 1fr)`,
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

      <img />
    </>
  );
}

export default GamePage;
