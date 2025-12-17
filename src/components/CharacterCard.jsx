function CharacterCard({ characterObject, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-3 max-sm:p-2 select-none overflow-hidden"
    >
      <img
        src={characterObject.img}
        className="w-[150px] bg-[#6969697a] rounded-[0.7rem] overflow-hidden"
      />
    </div>
  );
}

export default CharacterCard;
