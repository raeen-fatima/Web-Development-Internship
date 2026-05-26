import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import SignInForm from "./components/SignInForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [isRegister, setIsRegister] = useState(false);

  return (

    <div className="min-h-screen  ">

      <Navbar setIsRegister={setIsRegister} />

      <div className="flex justify-center mx-4  items-center mt-20">

        <div className="bg-white p-8 border  border-black shadow-lg w-[400px]">

          {
            isRegister
            ?
            <RegisterForm setIsRegister={setIsRegister} />
            :
            <SignInForm setIsRegister={setIsRegister} />
          }

        </div>

      </div>
      <Footer />

      <ToastContainer />

    </div>
  );
}

export default App;