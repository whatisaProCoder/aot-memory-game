function CharacterCard({ characterObject, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#3535357b] backdrop-blur-2xl border border-[#555555] rounded-[1.25rem] p-3 select-none"
    >
      <img
        src={characterObject.img}
        className="w-[150px] bg-[#6969697a] rounded-[0.7rem]"
      />
    </div>
  );
}

export default CharacterCard;
