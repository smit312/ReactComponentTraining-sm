import React from "react";
import CaLogo from "./common/CaLogo";
import UserAccount from "./SideBar/UserAccount";
// import CaMenu from './SideBar/CaMenu'
import CaProductMenu from "./SideBar/CaProductMenu";
const people = [
  {
    order: "#10014",
    date:"27 Apr 2021",
    customer : 'Brent Carson',
    payment : 'paid',
    status :'Unfulfilled',
    price : '$14.90'
  },
  {
    order: "#10013",
    date:"27 Apr 2021",
    customer : 'Brent Carson',
    payment : 'paid',
    status :'Unfulfilled',
    price : '$14.90'
  },
  {
    order: "#10012",
    date:"27 Apr 2021",
    customer : 'Brent Carson',
    payment : 'paid',
    status :'Unfulfilled',
    price : '$14.90'
  },
  {
    order: "#10011",
    date:"27 Apr 2021",
    customer : 'Brent Carson',
    payment : 'paid',
    status :'Unfulfilled',
    price : '$14.90'
  },
  {
    order: "#10010",
    date:"27 Apr 2021",
    customer : 'Brent Carson',
    payment : 'paid',
    status :'Unfulfilled',
    price : '$14.90'
  },
  {
    order: "#10014",
    date:"27 Apr 2021",
    customer : 'Brent Carson',
    payment : 'paid',
    status :'Unfulfilled',
    price : '$14.90'
  },
  // More Data...
];
// CaProductMenu
const Test = () => {
  return (
    <>
      <div className="min-h-full ">
        <div className="lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:pt-5 lg:pb-4 bg-white shadow">
          <CaLogo />
          <UserAccount />
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            {/* Navigation */}

            <CaProductMenu />
          </div>
        </div>
        <div className="lg:pl-64 flex flex-col ">
          <main className="h-screen bg-yellow-50">
            {/* Page title & actions */}
            <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      className="block w-full max-w-[295px] h-full pl-14  py-4 border-transparent font-semibold text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm rounded-2xl shadow-sm"
                      placeholder="Search for..."
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="mt-4 flex sm:mt-0 sm:ml-4">
                <div className="flex  items-center">
                  <div className="bg-yellow-100 p-3 mr-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                      />
                    </svg>
                  </div>
                </div>

                <button
                  type="button"
                  className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:order-1 sm:ml-3"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 mr-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>{" "}
                  Start Project
                </button>
              </div>
            </div>
            {/* Main Section */}
            <div className="px-10 mt-28">
              <div className="pb-5 sm:flex sm:items-center sm:justify-between ">
                <div>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown"
                    className="mt-1 block w-full py-2 px-7 border border-gray-300  rounded-md shadow-sm  sm:text-sm bg-yellow-100/70"
                  >
                    <option>
                      <span className="text-gray-400">Show:</span> All Projects
                    </option>
                  </select>
                </div>
                <div className="mt-3 flex items-center sm:mt-0 sm:ml-4">
                  <button
                    type="button"
                    className=" inline-flex items-center px-4 py-3 border border-transparent rounded-xl shadow-sm text-sm font-normal text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 font-bold mr-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                        />
                      </svg>
                    </span>{" "}
                    New Product
                  </button>
                  <div className="px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-10 h-10 ml-4 bg-yellow-100/70 py-1 px-1 rounded-lgSearch for history , cards ,…"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <select
                      id="dropdown"
                      name="dropdown"
                      autoComplete="dropdown"
                      className="mt-1 block w-full py-2 px-7 border border-gray-300  rounded-md shadow-sm  sm:text-sm bg-yellow-100/70"
                    >
                      <option>Select Options</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-white h-[32rem]">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-5 py-4 px-6">
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                      </div>
                      <input
                        id="search-field"
                        name="search-field"
                        className="block w-full h-full pl-14  py-4 border-transparent font-medium text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm rounded-2xl shadow-sm bg-yellow-100/60"
                        placeholder="Search for history , cards ,…"
                        type="search"
                      />
                    </div>
                  </div>
                  <div className="py-4">
                    <select
                      id="dropdown"
                      name="dropdown"
                      autoComplete="dropdown"
                      className="mt-1 block py-2 w-28 h-12 border border-gray-300  rounded-md shadow-sm  sm:text-sm bg-yellow-100/70"
                    >
                      <option>Action</option>
                    </select>
                  </div>
                </div>
                {/* Table */}
                <div className="px-4 sm:px-6 lg:px-8">
                  <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                              <tr>
                              <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  <input type="checkbox" className="ml-3 w-3 h-3"/>
                                </th>
                                <th
                                  scope="col"
                                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                >
                                  Order
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Customer
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Payment
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Status
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Price
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                              {people.map((person) => (
                                <tr key={person.order} className="border-none">
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    <input type="checkbox" className="w-3 h-3"/>
                                  </td>
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {person.order}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                                    {person.date}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                                    {person.customer}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {/* {person.payment} */}
                                    <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{person.payment}</span>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {/* {person.status} */}
                                    <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">{person.status}</span>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                                    {person.price}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Test;
