import React, { useState, useEffect } from "react";
import { TypewriterEffect } from "../../node_modules/framer-motion/dist/es/components/ui/typewriter-effect";
import logo from "../img/logo_sonatrach.svg";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login({ setU }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    poste: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(JSON.stringify(user));
      const response = await fetch("http://localhost:3005/api/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (!response.ok) {
        //code pour gestion des erreur
        console.log(data);
        toast.error(data.error);
      } else {
        navigate("../poste=2/212131");
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  const words = [
    { text: "Division" },
    { text: "Technologies" },
    { text: "&" },
    { text: "Development" },
    {
      text: "Boumerdes.",
      className: "text-[#F5811E] dark:text-blue-500",
    },
  ];

  return (
    <>
      <main className="w-full h-[100vh] flex">
        <div className="w-[50%] h-full bg-white flex flex-col items-center justify-evenly p-10 l">
          <img src={logo} alt="" className="w-[300px]" />
          <TypewriterEffect words={words} className="text-[40px]" />
        </div>
        <div className="w-[50%] flex justify-center items-center flex-col gap-4">
          <h1 className="flex items-center text-5xl font-extrabold dark:text-white mb-10">
            Login
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
              PRO
            </span>
          </h1>

          <form className="max-w-md mx-auto w-[80%]" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChange}
                value={user.email}
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChange}
                value={user.password}
                type="password"
                name="password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={handleChange}
                value={user.poste}
                name="poste"
              >
                <option selected disabled>
                  Poste
                </option>
                <option value="poste 1" className="pl-3">
                  Poste 1
                </option>
                <option value="poste 2">Poste 2</option>
                <option value="poste 3">Poste 3</option>
              </select>
              <label
                htmlFor="underline_select"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Poste
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group"></div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6"></div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
