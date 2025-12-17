// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function CharacterCard({ characterObject, onClick }) {
  return (
    <motion.div
      layout="position"
      key={characterObject.id}
      onClick={() => onClick()}
      className="border-4 border-[#323232c0] rounded-[1.25rem] select-none overflow-hidden hover:brightness-120"
      style={{ transition: "filter ease-in-out 0.15s" }}
    >
      <img src={characterObject.img} className="w-[150px]" />
    </motion.div>
  );
}

export default CharacterCard;
