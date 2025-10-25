import { Crown } from "lucide-react";

interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex items-center gap-3">
        <span className="text-gray-600 flex items-center gap-1">
          Hello, Admin <Crown className="w-4 h-4 text-yellow-500" />
        </span>
        <img
          src="https://ui-avatars.com/api/?name=Admin"
          alt="Avatar"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
};

export default Header;
