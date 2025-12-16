function LevelButton({ text, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className="text-[2.5rem] px-6 py-1 text-white rounded-xl border border-[#00000083] transition-all hover:-translate-y-0.5 hover:drop-shadow-sm outline-text"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

export default LevelButton;
