import React, { useState } from "react";
import Lottie from "react-lottie-player";
import ProfilePic from "../../commons/icons/profilepic.json";
import Toast from "../../commons/toast";
import jwt from "jsonwebtoken";
import axios from "axios";

function ProductAndServicesLinks({ setOpenProductAndServices, setLinks }) {
  const [content, setContent] = useState([""]);
  const [disableAdd, setDisableAdd] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e, index) => {
    const newLinks = [...content];
    newLinks[index] = e.target.value;
    setContent(newLinks);
    setDisableAdd(newLinks[index].trim() === "");
  };

  const handleAddInput = () => {
    if (disableAdd) {
      setShowToast(true);
      return;
    }
    setContent([...content, ""]);
    setDisableAdd(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (disableAdd) {
      setShowToast(true);
      return;
    }

    const token = localStorage.getItem("token");
    if (!Array.isArray(content) || content.length === 0) {
      console.error("Links array is empty.");
      return;
    }
    setLoading(true);

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/add_reel`;
    const payload = {
      links: content,
    };

    await axios
      .post(url, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLinks(response.data.data);
        setLoading(false);
        setContent([""]);
        setOpenProductAndServices(false);
      })
      .catch((error) => {
        console.error("An error occurred while adding reel links:", error);
        setLoading(false);
      });
  };

  const handleCancel = () => {
    setContent([""]);
    setOpenProductAndServices(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Lottie
          loop
          animationData={ProfilePic}
          play
          style={{ width: "40%", height: "40%", marginRight: 20 }}
        />

        <form
          style={{ maxHeight: "400px", overflowY: "auto" }}
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <div className="border-b border-gray-900/10 pb-2 mt-8">
              <div style={{ display: "flex" }}>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                </svg>
                <h2 className="text-base font-semibold leading-7 text-gray-900 ml-4">
                  Add your content links
                </h2>
              </div>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This content will be displayed publicly, so be careful what you
                share.
              </p>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                <div className="sm:col-span-12">
                  <label
                    htmlFor="links"
                    className="block text-md font-semibold leading-6 text-gray-900 text-start"
                  >
                    Add Links:
                  </label>
                  {content.map((link, index) => (
                    <div key={index} className="mt-2 relative px-1">
                      <input
                        type="text"
                        className="bg-gray-50 border shadow-md border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                        placeholder="Your reel/shorts links"
                        value={link}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="mt-2 rounded-md bg-[#f27430] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                    onClick={handleAddInput}
                  >
                    Add More Links
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#f27430] px-3 py-2 mb-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? (
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 mx-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#F27430]"
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
              ) : (
                "Save"
              )}
            </button>
          </div>
        </form>
      </div>
      {showToast && (
        <Toast
          showToast={showToast}
          setShowToast={setShowToast}
          type={2}
          text={"First enter your link"}
        />
      )}
    </>
  );
}

export default ProductAndServicesLinks;
