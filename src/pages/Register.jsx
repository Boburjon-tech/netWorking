import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/${Math.floor(
          Math.random() * 1000
        )}/1920/1080')`,
      }}
    >
      <div className="max-w-[500px]  w-full bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl text-center mb-6 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Ro'yxatdan o'tish
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Ism</label>
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Parol</label>
            <input
              type="password"
              placeholder="Parolingiz"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button
            variant="destructive"
            type="submit"
            className="w-full font-semibold py-3 rounded-xl transition duration-300"
          >
            Ro'yxatdan o'tish
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Akkauntingiz bormi?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Kirish
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
