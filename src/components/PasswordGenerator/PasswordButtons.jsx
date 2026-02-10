export default function PasswordButtons({ onGenerate, onCopy }) {
  return (
    <div className="flex justify-evenly w-full px-8 pb-8">
      <button
        onClick={onGenerate}
        className="w-52 bg-silver text-slate border-none rounded-lg px-8 py-5 mt-2 cursor-pointer hover:bg-mint active:shadow-[inset_1px_1px_5px_rgba(0,0,0,0.5)] transition-colors max-[530px]:w-[30vw]"
      >
        <span className="hidden max-[530px]:inline">Generate</span>
        <span className="max-[530px]:hidden">Generate Password</span>
      </button>
      <button
        onClick={onCopy}
        className="w-52 bg-silver text-slate border-none rounded-lg px-8 py-5 mt-2 cursor-pointer hover:bg-mint active:shadow-[inset_1px_1px_5px_rgba(0,0,0,0.5)] transition-colors max-[530px]:w-[30vw]"
      >
        <span className="hidden max-[530px]:inline">Copy</span>
        <span className="max-[530px]:hidden">Copy Password</span>
      </button>
    </div>
  );
}
