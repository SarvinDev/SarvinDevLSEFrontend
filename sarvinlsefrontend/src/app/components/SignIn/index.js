"use client";

import { DropdownDivider, FooterDivider } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Toast from "../commons/toast";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import { useMediaQuery } from "react-responsive";

const SignIn = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "creator",
  });

  // State to store login status and error message
  const [loginStatus, setLoginStatus] = useState({
    loading: false,
    error: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Set loading state to true
    setLoginStatus({ loading: true, error: "" });

    try {
      // Make API request to login
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        setShowToast(true);
        // If response is not OK, throw an error
        throw new Error("Login failed");
      }

      // If login is successful, reset form and update login status
      setCredentials({ email: "", password: "", role: "" });
      setLoginStatus({ loading: false, error: "" });
      // router.push("/dashboard/[]");
      const responseData = await response.json();
      if (!responseData?.user?.is_insta_verify) {
        router.push("/account-verification");
      }
      if (responseData?.user?.is_insta_verify) {
        router.push("/influencer-dashboard");
      }

      const decodedToken = jwt.decode(responseData.jwt);

      // console.log(responseData);
      // console.log(decodedToken);
      localStorage.setItem("token", responseData.jwt);

      // Redirect user to dashboard or perform any other action
    } catch (error) {
      // If there's an error, update login status with error message
      setLoginStatus({ loading: false, error: error.message });
    }
  };

  return (
    <div>
      <div>
        <div
          style={{
            height: "100vh",
            width: isTabletOrMobile ? "100vw" : "50vw",
            overflow: "hidden",
            background: `url(
          "https://hips.hearstapps.com/hmg-prod/images/hbz-black-creators-influencers-index-1591119518.jpg"
        ) `,
            backgroundBlendMode: 2,
            opacity: 0.1,
            position: "absolute",
          }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flex: 1,
        }}
      >
        {!isTabletOrMobile && (
          <div>
            <a href="/">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  position: "relative",
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "transparent",
                    opacity: 1,
                    border: 0,

                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 4,
                    }}
                  >
                    <div
                      style={{
                        color: "#E65C55",
                        fontSize: 100,
                      }}
                    >
                      SARVIN
                    </div>
                  </div>
                </span>
              </span>
              {/* Your logo */}
            </a>
          </div>
        )}
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <div>
            <a href="/">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "transparent",
                    opacity: 1,
                    border: 0,
                    margin: "34px 34px 2px 34px",
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "center",
                      gap: 4,
                    }}
                  >
                    <div
                      style={{
                        color: "#E65C55",
                        fontWeight: 200,
                        fontSize: 30,
                      }}
                    >
                      SARVIN
                    </div>
                    <i style={{ fontSize: 14 }}>For Influencers & Businesses</i>
                  </div>
                </span>
              </span>
              {/* Your logo */}
            </a>

            <div class="flex flex-col justify-center px-6 py-12 lg:px-8">
              <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="m-4 text-center text-2xl font-semibold  text-gray-900">
                  Happening Now! Sign In here....
                </h2>
                <h3 class="text-center  text-gray-900">
                  More Discoverability, More Opportunities
                </h3>
              </div>

              <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      for="email"
                      class="block text-md font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div class="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        placeholder="name@example.com"
                        value={credentials.email}
                        onChange={handleInputChange}
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div class="flex items-center justify-between">
                      <label
                        for="password"
                        class="block text-md font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div class="text-sm">
                        <a
                          href="/forget-password"
                          class="font-semibold text-gray-600 hover:text-gray-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div class="mt-2 flex align-middle gap-2">
                      <input
                        id="password"
                        name="password"
                        type={show ? "password" : "text"}
                        autocomplete="current-password"
                        value={credentials.password}
                        onChange={handleInputChange}
                        placeholder="Set your password (at least 8 characters)"
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                      <div class="flex flex-col justify-center">
                        {show ? (
                          <FaEye onClick={() => setShow(!show)} />
                        ) : (
                          <FaEyeSlash onClick={() => setShow(!show)} />
                        )}
                      </div>
                    </div>
                    <br />
                  </div>
                  <div>
                    <label
                      for="role"
                      class="block text-md font-medium leading-6 text-gray-900"
                    >
                      Role{" "}
                      <span class="text-xs text-gray-500">
                        Are you a Creator or Business?
                      </span>
                    </label>
                    <div>
                      <select
                        id="role"
                        name="role"
                        value={credentials.role}
                        onChange={handleInputChange}
                        required
                        placeholder="Are you Creator or Brand"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      >
                        <option className="text-black" value="creator">
                          Creator/Influencer
                        </option>
                        <option className="text-black" value="brand">
                          Brand/Business
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="gap-2">
                    <button
                      type="submit"
                      class="flex w-full mb-2 justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      {loginStatus.loading ? (
                        <div class="flex">
                          <div>Logging in....</div>
                          <svg
                            aria-hidden="true"
                            class="w-6 h-6 mx-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#F27430]"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        </div>
                      ) : (
                        "Continue"
                      )}
                    </button>
                    {showToast && (
                      <div className="w-full">
                        <Toast
                          text="Invalid Credentials"
                          type={2}
                          showToast={showToast}
                          setShowToast={setShowToast}
                        />
                      </div>
                    )}
                    <div class="text-gray-300 flex justify-center">--or--</div>
                    <button class="px-4 py-2 mt-2 w-full flex justify-center border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                      <img
                        class="w-6 h-6"
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        loading="lazy"
                        alt="google logo"
                      />
                      <span>Login with Google</span>
                    </button>
                  </div>
                </form>

                <div class="mt-10 text-center text-sm text-gray-500 gap-2 ">
                  <div>Not a member?</div>
                  <Link
                    href="/sign-up-influencer"
                    class="font-semibold leading-6 text-indigo-500 hover:text-indigo-700 mx-4"
                  >
                    SignUp as Influencer
                  </Link>
                  <Link
                    href="/sign-up-brand"
                    class="font-semibold leading-6 text-indigo-500 hover:text-indigo-700"
                  >
                    SignUp as Business
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
