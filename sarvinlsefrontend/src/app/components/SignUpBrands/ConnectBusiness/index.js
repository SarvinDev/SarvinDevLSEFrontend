"use client";
import { useState } from "react";
import BrandLocationModal from "../BrandLocationModal/index";
import Toast from "../../commons/toast/index";
import { useRouter } from "next/navigation";

const ConnectBusiness = ({ setBrandName, setPan, setGSTIN, setCategory, setLat, setLong, signUp }) => {
  const router = useRouter();
  const [verifyBusiness, setVerifyBusiness] = useState(false);
  const [verifyBusinessError, setVerifyBusinessError] = useState(false);
  const [progressWidth, setProgressWidth] = useState("70%");
  const [progressText, setProgressText] = useState("Just a few more steps");
  const [openModal, setOpenModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [successToastMessage, setSuccessToastMessage] = useState("");
  const [errorText, setErrorText] = useState("You encountered some error while registering the brand. Try Again!.");

  const handleContinue = (e) => {
    e.preventDefault();
    setProgressText("almost there :)");
    setProgressWidth("100%");
    setOpenModal(true);
  };

  const handleSubmit = (flag, response) => {
    if (flag) {
      setVerifyBusiness(true);
      setShowSuccessToast(true);
      setSuccessToastMessage(response.message);
    } else {
      setVerifyBusinessError(true);
      setErrorText(response.error[0].message || response.error);
    }
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

          {/* Form section */}
          {!verifyBusiness && !verifyBusinessError && (
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
                    onChange={(e) => setBrandName(e.target.value)}
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
                    onChange={(e) => setPan(e.target.value)}
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
                    onChange={(e) => setGSTIN(e.target.value)}
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

          {/* Success Section */}
          {verifyBusiness && !verifyBusinessError && (
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
                <button
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-[4px] shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-[#fc8545] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  onClick={() => router.push("/dashboard")}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Error Section */}
          {verifyBusinessError && (
            <div className="space-y-24 w-full">
              <div className="w-full">
                <div className="w-full flex justify-center items-center h-40">
                  <div className="h-24 w-24 rounded-full border-8 border-red-600 flex justify-center items-center animate-checkmark">
                    <svg
                      className="w-16 h-16 text-red-600"
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
                        d="M6 6l12 12M18 6l-12 12"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-center tracking-tighter">{errorText}</p>
                </div>
              </div>
              <div className="px-10">
                <button
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-[4px] shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-[#fc8545] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  onClick={() => router.push("/dashboard")}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Modal Section */}
          <BrandLocationModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleSubmit={handleSubmit}
            setCategory={setCategory}
            setLat={setLat}
            setLong={setLong}
            signUp={signUp}
          />
          {showSuccessToast && (
            <div className="fixed bottom-10 right-10">
              <Toast text={successToastMessage} type={1} setShowToast={setShowSuccessToast} />
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
