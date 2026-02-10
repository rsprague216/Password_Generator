import usePasswordGenerator from './usePasswordGenerator';
import PasswordDisplay from './PasswordDisplay';
import PasswordControls from './PasswordControls';
import PasswordToggles from './PasswordToggles';
import PasswordButtons from './PasswordButtons';

export default function PasswordGenerator() {
  const {
    password,
    length,
    setLength,
    uppercase,
    setUppercase,
    lowercase,
    setLowercase,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
    avoidAmbiguous,
    setAvoidAmbiguous,
    generateNewPassword,
    copyToClipboard
  } = usePasswordGenerator();

  return (
    <div className="bg-slate rounded-2xl shadow-[3px_3px_10px_rgba(0,0,0,0.2)] max-w-3xl mx-auto flex flex-col items-center overflow-hidden max-[730px]:w-full max-[730px]:max-w-none max-[730px]:rounded-none max-[730px]:shadow-none">
      <PasswordDisplay password={password} />
      <PasswordControls length={length} setLength={setLength} />
      <hr className="w-[90%] border-t border-navy" />
      <PasswordToggles
        uppercase={uppercase}
        setUppercase={setUppercase}
        lowercase={lowercase}
        setLowercase={setLowercase}
        numbers={numbers}
        setNumbers={setNumbers}
        symbols={symbols}
        setSymbols={setSymbols}
        avoidAmbiguous={avoidAmbiguous}
        setAvoidAmbiguous={setAvoidAmbiguous}
      />
      <hr className="w-[90%] border-t border-navy" />
      <PasswordButtons onGenerate={generateNewPassword} onCopy={copyToClipboard} />
    </div>
  );
}
