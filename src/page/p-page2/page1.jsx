import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Page1({ agent, setAgent }) {
  const [jour, setJour] = useState("xx");
  const [mois, setMois] = useState("xx");
  const [annee, setAnnee] = useState("xxxx");
  // pour la date de naissance
  useEffect(() => {
    let data = { ...agent };
    data.DateN = annee + "-" + mois + "-" + jour;
    setAgent(data);
    console.log(agent.DateN);
  }, [jour, mois, annee]);
  //
  return (
    <>
      <div className="w-full  ">
        <div className="w-full  pl-5 pr-5 pt-3 ">
          <div className="w-full h-6 mt-5 ">
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                try {
                  console.log(JSON.stringify(agent));
                  const response = await fetch(
                    "http://localhost:3002/api/ajouter",
                    {
                      method: "POST",
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify(agent),
                    }
                  );
                  const data = await response.json();
                  if (!response.ok) {
                    console.log(data);
                    toast.error(data.message);
                  } else {
                    toast.success(data.message);
                  }
                } catch (error) {
                  console.error("Une erreur s'est produite :", error);
                }
              }}
            >
              <div className="pl-[50px] pr-[50px]">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Nom
                    </label>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Nom = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Prénom
                    </label>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Prenom = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Sexe
                    </label>

                    <select
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Sex = e.target.value;
                        setAgent(data);
                      }}
                    >
                      <option selected>Selection sexe</option>
                      <option value="homme">Homme</option>
                      <option value="famme">Famme</option>
                    </select>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Né (e)
                    </label>
                    <div className="w-[100%] flex gap-6">
                      <input
                        type="tel"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Année"
                        required
                        onChange={(e) => {
                          setAnnee(e.target.value);
                        }}
                      />
                      <input
                        type="tel"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="mois"
                        required
                        onChange={(e) => {
                          setMois(e.target.value);
                        }}
                      />
                      <input
                        type="tel"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Jour"
                        required
                        onChange={(e) => {
                          setJour(e.target.value);
                        }}
                      />
                      <input
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="à"
                        required
                        onChange={(e) => {
                          let data = { ...agent };
                          data.LieuN = e.target.value;
                          setAgent(data);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Situation de famille
                    </label>
                    <select
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        let data = { ...agent };
                        data.SitutionFamille = e.target.value;
                        setAgent(data);
                      }}
                    >
                      <option selected>Selection la situation</option>
                      <option value="celibataire">Célibataire</option>
                      <option value="marie">Marié(e)</option>
                      <option value="pacse">Pacsé(e)</option>
                      <option value="divorce">Divorcé(e)</option>
                      <option value="veuf">Veuf/Veuve</option>
                    </select>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Adresse
                    </label>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Entrez  adresse"
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Adreese = e.target.value;
                        setAgent(data);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Groupe sanguin
                    </label>
                    <select
                      onChange={(e) => {
                        let data = { ...agent };
                        data.GroupeSanguim = e.target.value;
                        setAgent(data);
                      }}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="" selected disabled>
                        Selectionnez le groupage
                      </option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Allergie
                    </label>
                    <textarea
                      rows="10"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Description ..."
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Allergie = e.target.value;
                        setAgent(data);
                      }}
                    ></textarea>
                  </div>

                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      N° S.S.
                    </label>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="EX:123353442"
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Nss = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Division
                    </label>
                    <input
                      type="text"
                      placeholder="Entrez  ..."
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Division = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Direction
                    </label>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      placeholder="Entrez  ..."
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Direction = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Unite
                    </label>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Entrez  ..."
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Unite = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Service
                    </label>
                    <input
                      type="text"
                      placeholder="Entrez  ..."
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Service = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Atelier
                    </label>
                    <input
                      type="text"
                      placeholder="Entrez  ..."
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Atelier = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      for="Adresse"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Scolaire
                    </label>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Entrez  ..."
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Scolaire = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      for="Professionnelle"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Professionnelle
                    </label>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Entrez  ..."
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Professionnelle = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Qualification Professionnelle
                    </label>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Entrez  ..."
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Qprofessionnelle = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Activités Professionnelle antérieures
                    </label>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Entrez  ..."
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.ActiProAntet = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Service National
                    </label>
                    <select
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        let data = { ...agent };
                        data.ServiceNational = e.target.value;
                        setAgent(data);
                        console.log(agent);
                      }}
                    >
                      <option selected disabled>
                        Selection service
                      </option>
                      <option value="accompli">Accompli</option>
                      <option value="dispensé">Dispensé</option>
                      <option value="inapte">Inapte</option>
                    </select>
                  </div>
                </div>
                <label htmlFor=""></label>
                <button
                  type="button"
                  onClick={() => {}}
                  class="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  Ajoutez Poste
                </button>
                <div className="w-[100%]  p-4 flex flex-col gap-4">
                  <div className="w-full h-[150px] bg-gray-100 rounded-md">
                    <div className="w-full  h-6 p-2  flex justify-end ">
                      <div class="bg-red-500 w-8 h-5 text-[13px] hover:bg-red-700 text-white font-bold py-2 px-2 rounded flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          width="17px"
                          height="17px"
                        >
                          <path
                            d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"
                            fill="#ffffff"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-16 p-4 relative ">
                <button
                  type="submit"
                  class="text-white  bg-blue-700 hover:bg-blue-800 absolute right-3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page1;
