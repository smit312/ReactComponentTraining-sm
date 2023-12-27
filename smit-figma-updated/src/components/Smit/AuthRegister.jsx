import React from "react";
import CaLogo from "./common/CaLogo";

const AuthRegister = () => {
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-yellow-100/75 h-screen">
      <div className="sm:mx-auto">
        <CaLogo />
      </div>

      <div className="absolute  top-0 bottom-0 translate-x-44">
        <img
          className="inline-block  rounded-lg mb-3"
          src="https://i.ibb.co/18mfxFp/Side-elements-02-1.png"
          alt=""
        />
      </div>

      <div className="absolute  bottom-0 right-0">
        <img
          className="inline-block  rounded-lg mb-3"
          src="https://i.ibb.co/wN5GKvD/Side-elements-01-1.png"
          alt=""
        />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative">
        <div className="bg-white py-8 px-4 shadow sm:rounded-3xl sm:px-10">
          <div className="py-8">
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
              Getting Started
            </h2>
            <p className="mt-2 text-center text-sm text-gray-500">
              Create an account to continue!{" "}
            </p>
          </div>

          <form className="space-y-6" action="#" method="POST">
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-light text-gray-500 absolute top-0 -mt-2 ml-4 bg-white px-2"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-6 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm h-11"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="yourname"
                className="block text-sm font-light text-gray-500 absolute top-0 -mt-2 ml-4 bg-white px-2"
              >
                Your Name
              </label>
              <div className="mt-1">
                <input
                  id="yourname"
                  name="yourname"
                  type="text"
                  autoComplete="yourname"
                  required
                  className="appearance-none block w-full px-3 py-6 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm h-11"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-light text-gray-500 absolute top-0 -mt-2 ml-4 bg-white px-2"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-6 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-11 rounded-xl"
                />
              </div>
            </div>
            <div className="flex">
              <div class="rounded-tl-15 rounded-tr-15 bg-red-200 h-1 w-14 mr-4"></div>
              <div class="rounded-tl-15 rounded-tr-15 bg-orange-200 h-1 w-14 mr-4"></div>
              <div class="rounded-tl-15 rounded-tr-15 bg-green-200 h-1 w-14 mr-4"></div>
              <div class="rounded-tl-15 rounded-tr-15 bg-blue-200 h-1 w-14 mr-4"></div>
              <div class="rounded-tl-15 rounded-tr-15 bg-purple-200 h-1 w-14"></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  You agree to our Term and Conditions
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 font-normal">
                  Sign In with:
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <div className="w-full inline-flex justify-center  py-2 px-4  rounded-xl shadow-sm bg-yellow-50 text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      className="w-7 h-7 mr-2"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      ></path>
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      ></path>
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                    </svg>
                    Google
                  </span>
                </div>
              </div>

              <div className="w-full inline-flex justify-center  py-2 px-4  rounded-xl shadow-sm bg-yellow-50 text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="w-7 h-7 mr-2"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#03A9F4"
                      d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                    ></path>
                  </svg>
                  Twitter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" -mb-8 pt-7">
        <p className="mt-2 text-center text-base text-gray-700">
          Already have an account ?{" "}
          <span className="text-blue-500">Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default AuthRegister;
