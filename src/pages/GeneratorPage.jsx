import PasswordGenerator from '../components/PasswordGenerator/PasswordGenerator';

export default function GeneratorPage() {
  return (
    <main className="relative top-40 mb-40 max-[730px]:top-16 max-[605px]:top-18 landscape:max-h-[450px]:static landscape:max-h-[450px]:pt-20 landscape:max-h-[450px]:mb-0">
      <PasswordGenerator />
    </main>
  );
}
