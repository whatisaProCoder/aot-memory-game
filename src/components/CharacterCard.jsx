// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function CharacterCard({ characterObject, onClick }) {
  return (
    <motion.div
      layout="position"
      key={characterObject.id}
      onClick={() => onClick()}
      className="bg-[#35353589] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-3 max-sm:p-2 select-none overflow-clip"
    >
      <img
        src={characterObject.img}
        className="w-[150px] bg-[#6969697a] rounded-[0.7rem] overflow-hidden"
      />
    </motion.div>
  );
}

export default CharacterCard;
