import { useState } from "react";
import { toast } from "react-toastify";

function RegisterForm({ setIsRegister }) {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(user);

    toast.success("Register Successful");
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full"
    >

      <h1 className="text-2xl md:text-3xl  font-bold text-center">
        Register
      </h1>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
        className="border-b border-black p-3 outline-none text-sm md:text-base"
      />

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
        Register
      </button>

      <p className="text-center text-sm md:text-base">

        Already have an account?

        <span
          onClick={() => setIsRegister(false)}
          className="text-blue-500 cursor-pointer ml-2"
        >
          Sign In
        </span>

      </p>

    </form>
  );
}

export default RegisterForm;