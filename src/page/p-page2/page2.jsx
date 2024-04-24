import React from "react";
import { useState, useEffect } from "react";

function Page2({ agents, setAgents, Page }) {
  const [filter, setFilter] = useState("");
  console.log(agents);
  useEffect(() => {
    try {
      fetch("http://localhost:3005/api/agentall", {
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((data) => {
              throw new Error(data.erreur);
            });
          }
          return response.json();
        })
        .then((data) => {
          if (data) {
            function formatDate(dateString) {
              const dateObj = new Date(dateString);
              const year = dateObj.getFullYear();
              const month = String(dateObj.getMonth() + 1).padStart(2, "0");
              const day = String(dateObj.getDate()).padStart(2, "0");
              return `${year}-${month}-${day}`;
            }

            data.forEach((agent) => {
              agent.DateN = formatDate(agent.DateN);
            });

            setAgents(data);
          } else {
            throw new Error("No data received from the server");
          }
        })
        .catch((error) => {
          console.error("Une erreur s'est produite :", error);
          toast.error(error.message); // Affichage de l'erreur dans une notification par exemple
        });
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }, []);

  return (
    <>
      <div class="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
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
                    <div class="font-semibold text-left">N.S.S</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Sexe</div>
                  </th>

                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Date Naissance</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center ">Action</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {agents.map((e) => {
                  return (
                    <tr key={e.IdA}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <div className="rounded-full w-[40px] h-[40px] text-[20px] flex justify-center items-center bg-gray-300">
                              <h1 className="text-gray-50"> {e.Nom.charAt(0).toUpperCase()}{e.Prenom.charAt(0).toUpperCase()}</h1>
                            </div>
                          </div>
                          <div className="font-medium text-gray-800">
                            {e.Nom} {e.Prenom}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">rafik.longar@gmail.com</div>
                      </td>
                      <div className="font-medium text-gray-800">
                           {e.Nss}
                          </div>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          {e.Sex}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-sm text-center">{e.DateN}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap  mt-3 flex justify-center gap-2 items-center ">
                        <div className="w-auto h-auto">
                          <div className="flex-1 h-full">
                            <div className="flex items-center justify-center flex-1 h-full p-1 border border-green-500 text-white shadow rounded-lg">
                              <div
                                className="relative"
                                onClick={() => {
                                  setAjouter(true);
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-green-500"
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
                          style={{ color: "red" }} // Ajout du style pour définir la couleur en rouge
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
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page2;
