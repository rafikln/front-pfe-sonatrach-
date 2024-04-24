import React from "react";
import logo from "../img/logo_sonatrach.svg";
import { TypewriterEffect } from "../../node_modules/framer-motion/dist/es/components/ui/typewriter-effect";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Page1 from "./p-page2/page1";
import Page2 from "./p-page2/page2";
import Page3 from "./p-page2/page3";

import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

function Poste2({ user }) {
  const { id } = useParams();
  const [agent, setAgent] = useState({
    IdA: "",
    Division: "",
    Direction: "",
    Unite: "",
    Service: "",
    Atelier: "",
    Nom: "",
    Prenom: "",
    DateN: "",
    LieuN: "",
    Sex: "",
    SitutionFamille: "",
    Adreese: "",
    GroupeSanguim: "",
    Allergie: "",
    Nss: "",
    Scolaire: "",
    Professionnelle: "",
    Qprofessionnelle: "",
    ActiProAntet: "",
    ServiceNational: "",
    postes: [
      {
        Poste: "Poste1 Example",
        DateD: "2023-01-01",
        DateF: "2023-12-31",
        RisqueProfess: "RisqueProfess1 Example",
        Motifs: "Motifs1 Example",
      },
      {
        Poste: "Poste1 Example",
        DateD: "2023-01-01",
        DateF: "",
        RisqueProfess: "RisqueProfess1 Example",
        Motifs: "Motifs1 Example",
      },
    ],
  });
  const [poste, setPoste] = useState([{}]);
  const [agents, setAgents] = useState([]);
  const [page, Page] = useState(0);
  const navigate = useNavigate();
  const [u, setU] = useState({
    mail: "",
    poste: "",
    id: "",
  });

  //pour gérer les page
  function FPage() {
    switch (page) {
      case 0:
        return <Page3  /> ;
      case 1:
        return <Page1 agent={agent} setAgent={setAgent} />;
      case 2:
        return <Page2 agents={agents} setAgents={setAgents} Page={Page} />;
      case 3:
        return <>
        <h1>xx</h1>
        </>;

      case 4:
        return (
          <>
            <div class="flex h-[85vh] antialiased text-gray-800">
              <div class="flex flex-row h-full w-full overflow-x-hidden">
                <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                  <div class="flex flex-col mt-8">
                    <div class="flex flex-row items-center justify-between text-xs">
                      <span class="font-bold">Active Conversations</span>
                      <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                        4
                      </span>
                    </div>
                    <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                      <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                        <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                          D
                        </div>
                        <div class="ml-2 text-sm font-semibold">Doctor</div>
                      </button>
                      <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                        <div class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                          C
                        </div>
                        <div class="ml-2 text-sm font-semibold">
                          Chef Service
                        </div>
                        <div class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                          2
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col flex-auto h-full p-6">
                  <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                    <div class="flex flex-col h-full overflow-x-auto mb-4">
                      {/* message */}

                      <div class="flex flex-col h-full">
                        <div class="grid grid-cols-12 gap-y-2">
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                D
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>Salut .</div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                D
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>donner moi liste des agents</div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-6 col-end-13 p-3 rounded-lg">
                            <div class="flex items-center justify-start flex-row-reverse">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                I
                              </div>
                              <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                <div>bonjour </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-6 col-end-13 p-3 rounded-lg">
                            <div class="flex items-center justify-start flex-row-reverse">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                I
                              </div>
                              <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                <div>okay</div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                A
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>Lorem ipsum dolor sit amet !</div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-6 col-end-13 p-3 rounded-lg">
                            <div class="flex items-center justify-start flex-row-reverse">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                A
                              </div>
                              <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                <div>
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing. ?
                                </div>
                                <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                                  Seen
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                A
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Perspiciatis, in.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                A
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div class="flex flex-row items-center">
                                  <button class="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10">
                                    <svg
                                      class="w-6 h-6 text-white"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                      ></path>
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      ></path>
                                    </svg>
                                  </button>
                                  <div class="flex flex-row items-center space-x-px ml-4">
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-12 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-6 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-5 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-3 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-1 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-1 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                      <div>
                        <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                          <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div class="flex-grow ml-4">
                        <div class="relative w-full">
                          <input
                            type="text"
                            class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                          />
                          <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                            <svg
                              class="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="ml-4">
                        <button class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                          <span>envoyer</span>
                          <span class="ml-2">
                            <svg
                              class="w-4 h-4 transform rotate-45 -mt-px"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 5:

      default:
        return null; // Retourne null si 'page' n'est pas défini correctement
    }
  }
  const words = [
    {
      text: "Division",
    },
    {
      text: "Technologies ",
    },
    {
      text: "& ",
    },
    {
      text: "Development",
    },
    {
      text: "Boumerdes.",
      className: "text-[#F5811E] dark:text-blue-500",
    },
  ];

  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navigate = useNavigate();
    const closeMenu = () => setIsMenuOpen(false);
    useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false)
      );
    }, []);
    const profileMenuItems = [
      {
        label: "My Profile",
        icon: UserCircleIcon,
      },
      {
        label: "Inbox",
        icon: InboxArrowDownIcon,
      },
      {
        label: "Help",
        icon: LifebuoyIcon,
      },
      {
        label: "Sign Out",
        icon: PowerIcon,
      },
    ];
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span class="font-medium text-gray-600 dark:text-gray-300">
                JL
              </span>
            </div>

            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={() => {
                  if (label == "Sign Out") {
                    navigate("../../login");
                  }
                  if (label == "My Profile") {
                    Page(3);
                  }
                  if (label == "Inbox") {
                    Page(4);
                  }
                  if (label == "Help") {
                    Page(5);
                  }
                }}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }

  useEffect(() => {
    if (id && user.id == id) {
      setU({ ...user });
    } else {
      navigate("../login");
    }
  }, []);
  useEffect(() => {}, []);

  return (
    <>
      {id && user.id == id ? (
        <>
          <div className="w-full h-[12vh] bg-red-950 ">
            <nav className="fixed  h-[12vh] top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center pl-5 justify-between">
                  <div class="flex items-center justify-start rtl:justify-end">
                    <a href="https://flowbite.com" class="flex ms-2 md:me-24">
                      <img
                        src="https://sonatrach.com/img/header/sonatrach.png"
                        class="h-14 me-3"
                        alt="FlowBite Logo"
                      />
                      <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                        <TypewriterEffect
                          words={words}
                          className="text-[20px]"
                        />{" "}
                      </span>
                    </a>
                  </div>
                  <ProfileMenu />
                </div>
              </div>
            </nav>
          </div>
          <div className="w-[100%]   flex relative ">
            <div className="w-[15vw]   ">
              <aside
                id="logo-sidebar"
                class="fixed top-0 left-0 z-40 w-[15vw] h-screen pt-[13vh] transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 bg"
                aria-label="Sidebar"
              >
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                  <ul class="space-y-2 font-medium">
                    <li
                      onClick={() => {
                        Page(0);
                      }}
                    >
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="500"
                          zoomAndPan="magnify"
                          viewBox="0 0 375 374.999991"
                          height="500"
                          preserveAspectRatio="xMidYMid meet"
                          version="1.0"
                          fill="currentColor"
                        >
                          <defs>
                            <clipPath id="1aa51b7657">
                              <path
                                d="M 56 83 L 332.859375 83 L 332.859375 344.890625 L 56 344.890625 Z M 56 83 "
                                clipRule="nonzero"
                              />
                            </clipPath>
                          </defs>
                          <g clipPath="url(#1aa51b7657)">
                            <path
                              d="M 331.054688 201.1875 L 200.289062 85.675781 C 196.898438 82.679688 191.8125 82.679688 188.421875 85.675781 L 57.65625 201.1875 C 56.691406 202.039062 56.140625 203.261719 56.140625 204.546875 L 56.140625 340.40625 C 56.140625 342.882812 58.148438 344.890625 60.621094 344.890625 L 152.542969 344.890625 C 155.015625 344.890625 157.023438 342.882812 157.023438 340.40625 L 157.023438 253.632812 C 157.023438 243.738281 165.046875 235.710938 174.949219 235.710938 L 213.761719 235.710938 C 223.664062 235.710938 231.6875 243.738281 231.6875 253.632812 L 231.6875 340.40625 C 231.6875 342.882812 233.695312 344.890625 236.167969 344.890625 L 328.089844 344.890625 C 330.5625 344.890625 332.570312 342.882812 332.570312 340.40625 L 332.570312 204.546875 C 332.570312 203.261719 332.019531 202.039062 331.054688 201.1875 "
                              fillOpacity="1"
                              fillRule="nonzero"
                            />
                          </g>
                          <path
                            d="M 367.082031 156.367188 L 218.019531 25.363281 C 204.484375 13.46875 184.222656 13.46875 170.691406 25.363281 L 21.628906 156.367188 C 14.28125 162.828125 13.917969 174.148438 20.835938 181.066406 C 27.15625 187.386719 37.300781 187.707031 44.003906 181.800781 L 182.507812 59.8125 C 189.28125 53.84375 199.429688 53.84375 206.203125 59.808594 L 344.707031 181.800781 C 351.414062 187.707031 361.558594 187.386719 367.875 181.066406 C 374.796875 174.148438 374.429688 162.824219 367.082031 156.367188 "
                            fillOpacity="1"
                            fillRule="nonzero"
                          />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Accueil
                        </span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        Page(1);
                        console.log("cc");
                      }}
                    >
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                          <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                          <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">
                          + Ajouter Agents
                        </span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        Page(2);
                      }}
                    >
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 18"
                        >
                          <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">
                          List d'agents
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="500"
                          zoomAndPan="magnify"
                          viewBox="0 0 375 374.999991"
                          height="500"
                          preserveAspectRatio="xMidYMid meet"
                          version="1.0"
                        >
                          <defs>
                            <clipPath id="bf00348285">
                              <path
                                d="M 18.042969 83.285156 L 357 83.285156 L 357 315.035156 L 18.042969 315.035156 Z M 18.042969 83.285156 "
                                clip-rule="nonzero"
                              />
                            </clipPath>
                          </defs>
                          <g clip-path="url(#bf00348285)">
                            <path
                              fill="#000000"
                              d="M 356.769531 112.269531 C 356.765625 111.320312 356.710938 110.375 356.613281 109.429688 C 356.515625 108.484375 356.371094 107.546875 356.179688 106.617188 C 355.992188 105.6875 355.757812 104.765625 355.476562 103.859375 C 355.199219 102.953125 354.875 102.058594 354.507812 101.183594 C 354.140625 100.308594 353.734375 99.453125 353.285156 98.617188 C 352.835938 97.78125 352.34375 96.96875 351.816406 96.179688 C 351.289062 95.390625 350.722656 94.628906 350.117188 93.894531 C 349.515625 93.160156 348.878906 92.460938 348.207031 91.789062 C 347.535156 91.117188 346.832031 90.480469 346.097656 89.875 C 345.367188 89.273438 344.605469 88.707031 343.816406 88.179688 C 343.027344 87.648438 342.214844 87.160156 341.378906 86.710938 C 340.542969 86.261719 339.6875 85.855469 338.808594 85.488281 C 337.933594 85.121094 337.042969 84.796875 336.132812 84.519531 C 335.226562 84.238281 334.308594 84.003906 333.378906 83.816406 C 332.445312 83.625 331.507812 83.480469 330.566406 83.382812 C 329.621094 83.285156 328.671875 83.234375 327.722656 83.226562 L 47.355469 83.226562 C 46.40625 83.230469 45.457031 83.277344 44.511719 83.371094 C 43.566406 83.46875 42.628906 83.609375 41.695312 83.796875 C 40.761719 83.984375 39.84375 84.214844 38.933594 84.492188 C 38.023438 84.769531 37.128906 85.089844 36.253906 85.457031 C 35.375 85.820312 34.515625 86.226562 33.679688 86.675781 C 32.839844 87.125 32.027344 87.613281 31.238281 88.144531 C 30.445312 88.671875 29.683594 89.238281 28.949219 89.839844 C 28.214844 90.445312 27.511719 91.082031 26.839844 91.753906 C 26.167969 92.425781 25.53125 93.128906 24.925781 93.863281 C 24.324219 94.597656 23.757812 95.359375 23.230469 96.152344 C 22.699219 96.941406 22.210938 97.753906 21.761719 98.59375 C 21.3125 99.429688 20.90625 100.289062 20.542969 101.167969 C 20.175781 102.042969 19.855469 102.9375 19.578125 103.847656 C 19.300781 104.757812 19.070312 105.675781 18.882812 106.609375 C 18.695312 107.539062 18.554688 108.480469 18.457031 109.425781 C 18.363281 110.371094 18.316406 111.320312 18.3125 112.269531 L 18.3125 286.050781 C 18.320312 287 18.371094 287.949219 18.46875 288.894531 C 18.566406 289.835938 18.710938 290.773438 18.902344 291.707031 C 19.09375 292.636719 19.328125 293.554688 19.605469 294.460938 C 19.886719 295.371094 20.207031 296.261719 20.574219 297.136719 C 20.941406 298.011719 21.347656 298.867188 21.796875 299.707031 C 22.246094 300.542969 22.738281 301.355469 23.265625 302.144531 C 23.792969 302.929688 24.359375 303.691406 24.964844 304.425781 C 25.566406 305.160156 26.203125 305.863281 26.875 306.53125 C 27.546875 307.203125 28.25 307.839844 28.984375 308.445312 C 29.714844 309.046875 30.476562 309.613281 31.265625 310.140625 C 32.054688 310.671875 32.867188 311.160156 33.703125 311.609375 C 34.539062 312.058594 35.394531 312.46875 36.273438 312.832031 C 37.148438 313.199219 38.039062 313.523438 38.945312 313.800781 C 39.855469 314.082031 40.773438 314.316406 41.703125 314.507812 C 42.632812 314.695312 43.570312 314.839844 44.515625 314.9375 C 45.460938 315.035156 46.40625 315.089844 47.355469 315.09375 L 327.726562 315.09375 C 328.675781 315.09375 329.625 315.042969 330.570312 314.949219 C 331.515625 314.855469 332.457031 314.714844 333.386719 314.527344 C 334.320312 314.339844 335.242188 314.109375 336.152344 313.832031 C 337.058594 313.554688 337.953125 313.230469 338.832031 312.867188 C 339.710938 312.503906 340.566406 312.097656 341.40625 311.648438 C 342.242188 311.199219 343.058594 310.710938 343.847656 310.179688 C 344.636719 309.652344 345.398438 309.085938 346.132812 308.484375 C 346.871094 307.878906 347.574219 307.242188 348.246094 306.570312 C 348.917969 305.898438 349.554688 305.195312 350.15625 304.460938 C 350.761719 303.726562 351.328125 302.960938 351.855469 302.171875 C 352.382812 301.382812 352.875 300.566406 353.320312 299.730469 C 353.769531 298.890625 354.175781 298.035156 354.542969 297.15625 C 354.90625 296.277344 355.226562 295.386719 355.503906 294.476562 C 355.78125 293.566406 356.015625 292.644531 356.203125 291.714844 C 356.390625 290.78125 356.53125 289.84375 356.625 288.898438 C 356.71875 287.953125 356.769531 287.003906 356.769531 286.050781 Z M 243.714844 199.160156 L 343.878906 103.03125 C 345.527344 105.886719 346.351562 108.964844 346.34375 112.265625 L 346.34375 286.050781 C 346.347656 289.351562 345.519531 292.429688 343.867188 295.285156 Z M 327.71875 93.65625 C 330.773438 93.648438 333.652344 94.359375 336.355469 95.789062 L 194.242188 232.1875 C 193.796875 232.617188 193.3125 233 192.792969 233.335938 C 192.273438 233.671875 191.726562 233.957031 191.152344 234.191406 C 190.578125 234.421875 189.988281 234.597656 189.378906 234.714844 C 188.769531 234.832031 188.15625 234.890625 187.539062 234.890625 C 186.917969 234.890625 186.304688 234.832031 185.699219 234.714844 C 185.089844 234.597656 184.5 234.421875 183.925781 234.191406 C 183.351562 233.957031 182.804688 233.671875 182.285156 233.335938 C 181.765625 233 181.28125 232.617188 180.835938 232.1875 L 38.71875 95.796875 C 41.421875 94.371094 44.300781 93.660156 47.355469 93.664062 Z M 31.21875 295.285156 C 29.5625 292.429688 28.734375 289.351562 28.738281 286.050781 L 28.738281 112.269531 C 28.734375 108.972656 29.554688 105.894531 31.203125 103.035156 L 131.371094 199.160156 Z M 47.355469 304.667969 C 44.300781 304.675781 41.421875 303.964844 38.71875 302.535156 L 138.898438 206.382812 L 173.628906 239.710938 C 174.089844 240.15625 174.570312 240.578125 175.074219 240.976562 C 175.578125 241.375 176.097656 241.746094 176.636719 242.09375 C 177.171875 242.441406 177.726562 242.765625 178.296875 243.058594 C 178.867188 243.355469 179.449219 243.621094 180.042969 243.863281 C 180.636719 244.101562 181.242188 244.3125 181.855469 244.492188 C 182.472656 244.675781 183.09375 244.828125 183.722656 244.949219 C 184.351562 245.070312 184.984375 245.164062 185.625 245.222656 C 186.261719 245.285156 186.902344 245.316406 187.542969 245.316406 C 188.183594 245.316406 188.824219 245.285156 189.460938 245.222656 C 190.101562 245.164062 190.734375 245.070312 191.363281 244.949219 C 191.992188 244.828125 192.613281 244.675781 193.230469 244.492188 C 193.84375 244.3125 194.449219 244.101562 195.042969 243.863281 C 195.640625 243.621094 196.222656 243.355469 196.789062 243.058594 C 197.359375 242.765625 197.914062 242.441406 198.449219 242.09375 C 198.988281 241.746094 199.507812 241.375 200.011719 240.976562 C 200.515625 240.578125 200.996094 240.15625 201.457031 239.710938 L 236.183594 206.382812 L 336.367188 302.523438 C 333.664062 303.953125 330.785156 304.664062 327.726562 304.65625 Z M 47.355469 304.667969 "
                              fill-opacity="1"
                              fill-rule="nonzero"
                            />
                          </g>
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">
                          + Ajouter Visite
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="w-[84vw] h-8   ">
              {/* continer */}
              {FPage()}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-[100vh] flex justify-center items-center">
            <span className="loading loading-bars loading-lg "></span>
          </div>
        </>
      )}
    </>
  );
}

export default Poste2;
