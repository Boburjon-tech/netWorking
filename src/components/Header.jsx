import { Link } from "react-router-dom"
import { Button } from "./ui/button"
function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-white/10 backdrop-blur-md shadow-md rounded-b-xl">
      <a href="/"><span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NetChat</span></a>

      <nav className="flex gap-10 text-gray-600 ">
        <Link className="hover:text-blue-500">Bosh sahifa</Link>
        <Link className="hover:text-blue-500">Odamlar</Link>
        <Link className="hover:text-blue-500">Tadbirlar</Link>
        <Link className="hover:text-blue-500">Guruhlar</Link>
      </nav>

      <div className="flex gap-5">
        <Button variant="ghost">Kirish</Button>
        <Button variant="destructive">Ro'yhatdan o'tish</Button>
      </div>
    </div>
  )
}

export default Header
