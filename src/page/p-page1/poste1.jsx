import React from "react";
import { TypewriterEffect } from "../../../node_modules/framer-motion/dist/es/components/ui/typewriter-effect.js";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Page1 from "../p-page2/page1.jsx";
import Page2 from "../p-page2/page2.jsx";
import Page3 from "../p-page2/page3.jsx";
import P3 from "../p-page2/p3.jsx"
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
        return <P3   />
      case 1:
        return <Page1 agent={agent} setAgent={setAgent} />;
      case 2:
        return <Page2 agents={agents} setAgents={setAgents} Page={Page} />;
      case 3:
        return (
          <>
          </>
        );

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
          <div className="w-full h-[12vh] bg-red-950  first-letter:">
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
                          Ajouter agents
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
                    <li
                    onClick={() => {
                      Page(3);
                    }}>
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
                        <span class="flex-1 ms-3 whitespace-nowrap">
                           Ajouter convocation
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
