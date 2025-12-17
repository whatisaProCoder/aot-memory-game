function AlertBox({ header, subtext, onClose }) {
  return (
    <div className="fixed h-full w-full backdrop-blur-2xl z-5 flex flex-row justify-center items-center fade-in">
      <div className="bg-[#3535357b] backdrop-blur-2xl border border-[#616161bd] px-10 py-6 rounded-[1.25rem] flex flex-col gap-6 justify-center items-center">
        <div className="text-4xl">{header}</div>
        <div className="text-2xl">{subtext}</div>
        <button
          onClick={onClose}
          className="bg-[#e72121] hover:bg-[#fb4848] text-white text-2xl px-5 py-1 rounded-md border border-[#f86e6e]"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default AlertBox;
