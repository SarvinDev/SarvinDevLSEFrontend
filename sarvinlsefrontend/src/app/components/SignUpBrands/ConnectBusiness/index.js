"use client";
import { useState } from "react";

const ConnectBusiness = () => {
  const [verifyBusiness, setVerifyBusiness] = useState(false);
  const [progressWidth, setProgressWidth] = useState("70%");
  const [progressText, setProgressText] = useState("Just a few more steps");

  const handleContinue = (e) => {
    e.preventDefault();
    setProgressText("almost there :)");
    setProgressWidth("100%");
    setVerifyBusiness(true);
  };

  return (
    <>
      <div className="h-full w-full px-8 sm:px-0 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-[32px] font-[500] text-center">
          {verifyBusiness ? "Verify your business account" : "Connect your business account"}
        </h1>
        <div className="w-full max-w-[400px] space-y-14">
          <div className="w-full">
            <p className="w-full text-end text-[#E86C2F] leading-3 pr-4 tracking-tight text-sm font-medium">
              {progressText}
            </p>
            <div className="w-full bg-[#cacaca] rounded-full dark:bg-[#cacaca]" style={{ marginTop: 10 }}>
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0 leading-none rounded-full transition-all ease-out duration-500"
                style={{ width: progressWidth, height: "15px" }}
              ></div>
            </div>
          </div>
          {!verifyBusiness && (
            <form className="space-y-20" onSubmit={handleContinue}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="brandName" className="block text-sm font-semibold text-gray-700">
                    Enter your brand’s name
                  </label>
                  <input
                    type="text"
                    id="brandName"
                    name="brandName"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter brand’s name"
                    autoComplete="organization"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="panNumber" className="block text-sm font-semibold text-gray-700">
                    Enter your PAN account number
                  </label>
                  <input
                    type="text"
                    id="panNumber"
                    name="panNumber"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter PAN number"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gstNumber" className="block text-sm font-semibold text-gray-700">
                    Enter your GSTIN number
                  </label>
                  <input
                    type="text"
                    id="gstNumber"
                    name="gstNumber"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your company’s GSTIN number"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="px-10">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-[4px] shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-[#fc8545] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Continue
                </button>
              </div>
            </form>
          )}
          {verifyBusiness && (
            <div className="space-y-24 w-full">
              <div className="w-full">
                <div className="w-full flex justify-center items-center h-40">
                  <div className="h-24 w-24 rounded-full border-8 border-[#34A853] flex justify-center items-center animate-checkmark">
                    <svg
                      className="w-16 h-16 text-[#34A853]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M5 11.917 9.724 16.5 19 7.5"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-center tracking-tighter">
                    Your details are being verified and should be confirmed within 2-3 business days. Once verified,
                    you’ll gain access to our exclusive brand features.
                  </p>
                </div>
              </div>
              <div className="px-10">
                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-[4px] shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-[#fc8545] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes checkmark {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-checkmark {
          animation: checkmark 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default ConnectBusiness;
