import { useState, useEffect } from 'react';
import { generatePassword } from '../../utils/passwordUtils';

export default function usePasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(20);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [avoidAmbiguous, setAvoidAmbiguous] = useState(true);

  // Generate new password whenever options change
  useEffect(() => {
    generateNewPassword();
  }, [length, uppercase, lowercase, numbers, symbols, avoidAmbiguous]);

  const generateNewPassword = () => {
    const newPassword = generatePassword(length, {
      uppercase,
      lowercase,
      numbers,
      symbols,
      avoidAmbiguous
    });
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    if (password === "") {
      console.log("no password to copy");
      return;
    }
    console.log("copying password...");
    navigator.clipboard.writeText(password);
  };

  return {
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
  };
}
