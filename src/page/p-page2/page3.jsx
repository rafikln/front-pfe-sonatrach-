import React, { useState, useEffect } from "react";

import Selector from "./com-page3/selector.jsx";
import toast, { Toaster } from "react-hot-toast";
function Page3() {
  const [agents, setAgents] = useState([
    {
      IdA: "1",
      Nom: "Longar",
      Prenom: "Rafik",
      Email: "rafik.longar000@gmail.com",
    },
    {
      IdA: "2",
      Nom: "Gougache",
      Prenom: "Moh",
      Email: "gougachemog@gmail.com    ",
    },
    {
      IdA: "3",
      Nom: "Douboub",
      Prenom: "Merzak",
      Email: "deboub.merzak@gmail.com",
    },
  ]);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [dateString, setDateString] = useState("");
  const [ajouter, setAjouter] = useState(false);
  const [heure, setHeure] = useState("");
  const [minute, setMinute] = useState("");
  const [rdv, setRdv] = useState({
    IdA: "",
    TypeRdv: "",
    Date: currentYear + "/" + currentMonth + "/" + currentDay,
    Heure: "",
  });

  const [rdvs, setRdvs] = useState([
    {
      IdA: "1",
      Nom: "longar",
      Prenom: "rafik",
      Email: "rafiklongar000@gmail.com",
      TypeRdv: "visite1",
      Date: currentYear + "/" + currentMonth + "/" + currentDay,
      Heure: "",
    },
    {
      IdA: "2",
      Nom: "touati",
      Prenom: "abdellah",
      Email: "abdellah.touati@gmail.com",
      TypeRdv: "visite2",
      Date: currentYear + "/" + currentMonth + "/" + currentDay,
      Heure: "10h 30min",
    },
    {
      IdA: "3",
      Nom: "gougache",
      Prenom: "moh",
      Email: "g.moha@gmail.com",
      TypeRdv: "visite3",
      Date: currentYear + "/" + currentMonth + "/" + currentDay,
      Heure: "12h 30min",
    },
  ]);

  const [heureError, setHeureError] = useState(false);
  const [minuteError, setMinuteError] = useState(false);
  const [typeRdvError, setTypeRdvError] = useState(false);
  const handleDelete = (id) => {
    const filteredRdvs = rdvs.filter((element) => {
      return element.IdA !== id;
    });
    setRdvs(filteredRdvs);
  };
  function getHourOrMinute(timeString, type) {  
    // Si timeString n'est pas vide, procédez au split
    const [hour, minute] = timeString.split('h')[1].split('min');

    if (type === 1) {
        return hour; // Retourner l'heure sans modifier l'état
    } else if (type === 2) {
        return minute; // Retourner les minutes sans modifier l'état
    } else {
        return "";
    }
}


  

  useEffect(() => {
    console.log(rdv);
  }, [rdv]);

  useEffect(() => {
    let data = { ...rdv };
    data.Heure = heure + "h" + minute +"min";
    setRdv(data);
  }, [heure, minute]);
  useEffect(() => {
    showModal(currentDay); // Appel de la fonction showModal pour initialiser la date
  }, []);
  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const handleChangeHeure = (e) => {
    const value = e.target.value;
    if (value < 0 || value > 23) {
      setHeureError(true);
    } else {
      setHeureError(false);
      setHeure(value);
    }
  };
  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (!value) {
      setTypeRdvError(true);
    } else {
      setTypeRdvError(false);
      let data = { ...rdv };
      data.TypeRdv = value;
      setRdv(data);
    }
  };
  const handleChangeMinute = (e) => {
    const value = e.target.value;
    if (value < 0 || value > 60) {
      setMinuteError(true);
    } else {
      setMinuteError(false);
      setMinute(value);
    }
  };
  // Function to generate the calendar for a specific month and year
  function generateCalendar(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    let calendar = [];
    let index = 0;

    // Create empty boxes for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendar.push(<div key={index}></div>);
      index++;
    }

    // Create boxes for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      // Determine if the day button should be disabled
      const isDisabled = isDateDisabled(year, month, day);
      // Determine if the day is today
      const isToday = isDayToday(year, month, day);

      calendar.push(
        <div
          key={index}
          className={`text-center py-2 border cursor-pointer ${
            isDisabled ? "opacity-50 " : "hover:bg-gray-200"
          } ${isToday ? "border-blue-800 border-[2px]" : ""}`}
          onClick={() => showModal(day)}
        >
          {day}
        </div>
      );
      index++;
    }

    return calendar;
  }

  // Function to determine if a date is today
  function isDayToday(year, month, day) {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  }

  // Function to determine if a date is before the current date
  function isDateDisabled(year, month, day) {
    const currentDate = new Date();
    const selectedDate = new Date(year, month, day);
    return selectedDate < currentDate;
  }

  // Function to show the modal with the selected date
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Function to show the modal with the selected date
  const showModal = (day) => {
    setCurrentDay(day);
    console.log(day);
    const selectedDate = new Date(currentYear, currentMonth, day);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let formattedDate = selectedDate.toLocaleDateString(undefined, options);
    // Capitalize the first letter of the day
    formattedDate = capitalizeFirstLetter(formattedDate);
    setDateString(formattedDate);
  };

  // Event handlers for previous and next month buttons
  const handlePrevMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <div className="w-full flex gap-4 p-3 ">
      {/* liste */}
      <div className="w-[65%] h-12 ">
        <section class="antialiased">
          <div class="flex flex-col justify-center h-full">
            <div class="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
              <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">{dateString}</h2>
              </header>
              <div class="p-3">
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-sm font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Nom</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">E-mail</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Heure</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Type-RDV</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Action</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      {rdvs.map((e) => {
                        return (
                          <>
                            <tr>
                              <td class="p-2 whitespace-nowrap">
                                <div class="flex items-center">
                                  <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                    <div class="rounded-full w-[40px] h-[40px] text-[20px] flex justify-center items-center bg-gray-300">
                                      <h1 className="text-gray-50">
                                        {" "}
                                        {e.Nom[0].toUpperCase()}
                                        {e.Prenom[0].toUpperCase()}
                                      </h1>
                                    </div>
                                  </div>
                                  <div class="font-medium text-gray-800">
                                    {e.Nom} {e.Prenom}
                                  </div>
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{e.Email}</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left font-medium text-green-500">{e.Heure}</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-sm text-center">
                                  {e.TypeRdv}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap  mt-3 flex justify-center gap-2 items-center ">
                                <div class="w-auto h-auto">
                                  <div class="flex-1 h-full">
                                    <div class="flex items-center justify-center flex-1 h-full p-1 border border-green-500 text-white shadow rounded-lg">
                                      <div
                                        class="relative"
                                        onClick={() => {
                                          setAjouter(true);
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          class="h-4 w-4 text-green-500"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  onClick={() => handleDelete(e.IdA)
                                  //url pour delete
                                  } 

                                  style={{ color: "red" }}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* cal + button + forme */}
      <div className="w-[35%] flex flex-col gap-[80px]">
        <div className="bg-white  h-[55vh]   shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
            <button onClick={handlePrevMonth} className="text-white">
              Précédent
            </button>
            <h2 className="text-white">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
            <button onClick={handleNextMonth} className="text-white">
              Suivant
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 p-4">
            {generateCalendar(currentYear, currentMonth)}
          </div>
        </div>
        <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          onClick={() => {
            setAjouter(true);
          }}
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-10  py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          + Ajouter Convocation
        </button>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await fetch(
                "http://localhost:3005/api/convocation",
                {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: rdv,
                }
              );
              const data = await response.json();
              if (!response.ok) {
                toast.error(data.message);
              } else {
                toast.success(data.message);
                setAjouter(false);
              }
            } catch (error) {
              console.error("Une erreur s'est produite :", error);
            }
          }}
          id="default-modal"
          tabindex="-1"
          aria-hidden="true"
          class={` ${
            ajouter ? "" : "hidden"
          } overflow-y-auto overflow-x-hidden h-screen fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full `}
        >
          <div class="relative w-[70vw] pl-5">
            <div class="relative bg-gray-50 rounded-lg shadow dark:bg-gray-700">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Ajouter Convocation
                </h3>
                <h3 class="text-xl font-normal text-gray-900 dark:text-white">
                  {dateString}
                </h3>
              </div>

              <div class="p-4 md:p-5 space-y-4 max-h-60 overflow-y-auto ">
                <div className="w-full h-[40vh]    flex flex-col gap-3">
                  <div className=" ">
                    <Selector agents={agents} rdv={rdv} setRdv={setRdv} />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Type-RDV
                    </label>

                    <select
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChangeHeure}
                      required
                      value={rdv.TypeRdv}
                    >
                      {/* Commentaire déplacé */}
                      <option selected disabled>
                        Selection Type Visite
                      </option>
                      <option value="visite1">Visite1</option>
                      <option value="visite2">Visite2</option>
                      <option value="visite3">Visite3</option>
                      <option value="visite4">Visite4</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Heure
                    </label>
                    <div className="w-[60%] flex gap-6 pl-3">
                      <input
                        type="tel"
                        pattern="[0-9]{2}"
                        max={23}
                        value={rdv.Heure && getHourOrMinute(rdv.Heure , 1)}
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                          heureError && "bg-red-200"
                        }`}
                        placeholder="HH"
                        required
                        onChange={handleChangeHeure}
                      />
                      <p className="mt-2">:</p>
                      <input
                        type="tel"
                        pattern="[0-9]{2}"
                        max={59}
                        value={rdv.Heure && getHourOrMinute(rdv.Heure, 2)}
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                          minuteError && "bg-red-200"
                        }`}
                        placeholder="MM"
                        required
                        onChange={handleChangeMinute}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Enregistrer
                </button>
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  onClick={() => {
                    setAjouter(false);
                  }}
                  class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Annuler{" "}
                </button>
              </div>
            </div>
          </div>
        </form>

        
      </div>
    </div>
  );
}

export default Page3;
