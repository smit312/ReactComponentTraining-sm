import CaLogo from "./common/CaLogo";
import UserAccount from "./SideBar/UserAccount";
import CaMenu from "./SideBar/CaMenu";
// import More from '../../assets/svg/More-1.svg'
const cards = [
  {
    name: "CaDesign",
    members: 30,
    href: "#",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 mr-3 text-yellow-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        />
      </svg>
    ),
    avatars: [
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },{
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
    ],
  },
  {
    name: "CaDesign",
    members: 30,
    href: "#",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 mr-3 text-yellow-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        />
      </svg>
    ),
    avatars: [
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
    ],
  },
  {
    name: "CaDesign",
    members: 30,
    href: "#",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 mr-3 text-yellow-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        />
      </svg>
    ),
    avatars: [
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },{
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
      {
        url: "https://i.ibb.co/7QP6TXx/Avatar-6.png",
      },
    ],
  },
  // More items...
];

const ProductManage = () => {
  return (
    <>
      <div className="min-h-full ">
        <div className="lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:pt-5 lg:pb-4 bg-white shadow">
          <CaLogo />
          <UserAccount />
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            {/* Navigation */}

            <CaMenu />
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
            <div className="px-4 mt-6 sm:px-6 lg:px-8">
              <div className="mt-8">
                <div className="max-w-7xl">
                  <h2 className="text-xl leading-6 font-medium text-gray-900 mb-4">
                    My Teams
                  </h2>
                  <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    {cards.map((card) => (
                      <div
                        key={card.name}
                        className="bg-white overflow-hidden shadow rounded-lg"
                      >
                        <div className="p-5">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <img
                                className="inline-blockh-12 w-12 rounded-lg -mr-4"
                                src="https://i.ibb.co/7QP6TXx/Avatar-6.png"
                                alt=""
                              />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dd>
                                  <div className="text-lg font-medium text-gray-900">
                                    {card.name}
                                  </div>
                                </dd>
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                  {card.members} members
                                </dt>
                              </dl>
                            </div>
                            <img src="https://i.ibb.co/T0VRJcY/More-1.png" alt=""/>
                          </div>
                          <div className="bg-yellow-50  py-3 mt-3 flex ">
                            {card.avatars.map((item) => (
                              <div className="flex bg-blue-200 mr-3" key={item}>
                                <img
                                  className="inline-block h-10 w-10 rounded-lg"
                                  src={item.url}
                                  alt=""
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* <div className="bg-gray-50 px-5 py-3"> */}
                          {/* Avatars Map */}
                        {/* </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="max-w-7xl">
                  <h2 className="text-xl leading-6 font-medium text-gray-900 mb-4">
                    My Projects
                  </h2>
                  <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    {cards.map((card) => (
                      <div
                        key={card.name}
                        className="bg-white overflow-hidden shadow rounded-lg"
                      >
                        <div className="p-5">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <img
                                className="inline-blockh-12 w-12 rounded-lg -mr-4"
                                src="https://i.ibb.co/7QP6TXx/Avatar-6.png"
                                alt=""
                              />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dd>
                                  <div className="text-lg font-medium text-gray-900">
                                    {card.name}
                                  </div>
                                </dd>
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                  {card.members} members
                                </dt>
                              </dl>
                            </div>
                            <img src="https://i.ibb.co/T0VRJcY/More-1.png" alt=""/>
                          </div>
                          {/* <div className="pt-6">
                            <div class="w-full bg-orange-100">
                              <div class="bg-primary  text-center text-[11px] font-normal leading-none text-primary-100">
                                100%
                              </div>
                            </div>
                          </div> */}
                          <div class="progress-bar flex justify-around mt-5">
                          <div class="progress-bar-fill flex flex-0"></div>
                          {/* <div className="flex ml-96 float-right mt-0 mb-2">50</div> */}
  {/* <span class="progress-bar-text">80%</span> */}
                          </div>
                          <div className="bg-yellow-50  py-3 mt-3 flex">
                            {card.avatars.map((item) => (
                              <div className="mr-2" key={item}>
                                <img
                                  className="inline-block h-10 w-10 rounded-lg"
                                  src={item.url}
                                  alt=""
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
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
export default ProductManage;
