function Navbar({ setIsRegister }) {

  return (

    <nav className="flex justify-between items-center bg-black shadow-md px-8 py-4 underline-offset-black">

      <h1 className="text-2xl  font-bold text-white">
        Auth App
      </h1>

      <div className="flex gap-4">

        <button
          onClick={() => setIsRegister(false)}
          className="bg-white text-black hover:bg-gray-300 font-bold px-4 py-2 rounded-lg"
        >
          Sign In
        </button>

        <button
          onClick={() => setIsRegister(true)}
          className="border-2 border-white hover:bg-white hover:text-black text-white font-bold px-4 py-2 rounded-lg"
        >
          Register
        </button>

      </div>

    </nav>
  );
}

export default Navbar;