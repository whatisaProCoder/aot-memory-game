function LevelButton({ text, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className="text-[2.5rem] px-6 py-1 rounded-xl border border-[#00000083] hover:brightness-115 transition-all hover:-translate-y-0.5 hover:drop-shadow-sm"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

export default LevelButton;
