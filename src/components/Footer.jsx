export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-8 bg-navy text-mint flex justify-between items-center px-6 text-sm max-[450px]:[&_.extra]:hidden landscape:max-h-[450px]:static landscape:max-h-[450px]:mt-4">
      <p>&copy; 2025 Ryan Sprague</p>
      <p className="extra">Created with React &amp; TailwindCSS</p>
    </footer>
  );
}
