export default function PasswordDisplay({ password }) {
  return (
    <div className="w-full p-6 bg-silver text-slate text-2xl break-words">
      <p>{password}</p>
    </div>
  );
}
