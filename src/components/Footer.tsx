export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-20 py-10 text-sm text-gray-400 bg-black ">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        
        <p className="items-center gap-2">© 2026 SideQuest. All rights reserved.</p>

        <div className="flex gap-10">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="https://github.com/harleen05/sidequest-hub" className="hover:text-white">GitHub</a>
        </div>

      </div>

    </footer>
  );
}