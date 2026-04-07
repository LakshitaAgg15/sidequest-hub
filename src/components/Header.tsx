import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="border-b border-gray-800 px-10 py-5 text-white bg-black ">
      
      <div className="flex justify-between items-center">

        <div
          onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer group transition-all duration-300 hover:scale-105"

        >
          <img
            src="/favicon.svg"
            alt="SideQuest Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-xl font-bold text-yellow-400">
            SideQuest
          </span>
        </div>

        {/* Nav */}
        <nav className="flex gap-8 text-sm text-gray-300">
          <a href="/quick-start" className="relative transition-all duration-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">Get Started</a>
          <a href="/worlds" className="relative transition-all duration-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">Worlds</a>
        </nav>

      </div>
    </header>
  );
}