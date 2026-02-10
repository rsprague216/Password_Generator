export default function PasswordControls({ length, setLength }) {
  return (
    <div className="flex items-center w-full px-8 pt-8 pb-8">
      <input
        type="range"
        id="pw_length"
        min="8"
        max="64"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="flex-1 accent-silver"
      />
      <span className="flex-[0_0_10%] flex justify-center text-mint">{length}</span>
    </div>
  );
}
