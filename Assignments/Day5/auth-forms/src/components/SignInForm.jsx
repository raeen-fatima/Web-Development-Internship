import { useState } from "react";
import { toast } from "react-toastify";

function SignInForm({ setIsRegister }) {

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(login);

    toast.success("Login Successful");
  };

  return (

    <div className="w-full">

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full"
      >

        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Sign In
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          className="border-b border-black p-3 outline-none text-sm md:text-base"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          className="border-b border-black p-3 outline-none text-sm md:text-base"
        />

        <button
          type="submit"
          className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
        >
          Sign In
        </button>

        <p className="text-center text-sm md:text-base">

          Don't have an account?

          <span
            onClick={() => setIsRegister(true)}
            className="text-blue-500 cursor-pointer ml-2"
          >
            Register
          </span>

        </p>

      </form>

    </div>
  );
}

export default SignInForm;