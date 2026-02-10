export default function PasswordToggles({
  uppercase,
  setUppercase,
  lowercase,
  setLowercase,
  numbers,
  setNumbers,
  symbols,
  setSymbols,
  avoidAmbiguous,
  setAvoidAmbiguous
}) {
  return (
    <div className="flex flex-wrap justify-evenly w-full px-8 pb-8 text-sm text-mint">
      <div className="flex items-center gap-2 pt-2">
        <input
          type="checkbox"
          id="pw_uppercase"
          checked={uppercase}
          onChange={(e) => setUppercase(e.target.checked)}
          className="w-5 h-5 accent-silver cursor-pointer"
        />
        <label htmlFor="pw_uppercase" className="cursor-pointer">Uppercase</label>
      </div>
      <div className="flex items-center gap-2 pt-2">
        <input
          type="checkbox"
          id="pw_lowercase"
          checked={lowercase}
          onChange={(e) => setLowercase(e.target.checked)}
          className="w-5 h-5 accent-silver cursor-pointer"
        />
        <label htmlFor="pw_lowercase" className="cursor-pointer">Lowercase</label>
      </div>
      <div className="flex items-center gap-2 pt-2">
        <input
          type="checkbox"
          id="pw_numbers"
          checked={numbers}
          onChange={(e) => setNumbers(e.target.checked)}
          className="w-5 h-5 accent-silver cursor-pointer"
        />
        <label htmlFor="pw_numbers" className="cursor-pointer">Numbers</label>
      </div>
      <div className="flex items-center gap-2 pt-2">
        <input
          type="checkbox"
          id="pw_special"
          checked={symbols}
          onChange={(e) => setSymbols(e.target.checked)}
          className="w-5 h-5 accent-silver cursor-pointer"
        />
        <label htmlFor="pw_special" className="cursor-pointer">Symbols</label>
      </div>
      <div className="flex items-center gap-2 pt-2">
        <input
          type="checkbox"
          id="avoid_ambig"
          checked={avoidAmbiguous}
          onChange={(e) => setAvoidAmbiguous(e.target.checked)}
          className="w-5 h-5 accent-silver cursor-pointer"
        />
        <label htmlFor="avoid_ambig" className="cursor-pointer">Avoid Ambiguous Characters</label>
      </div>
    </div>
  );
}
