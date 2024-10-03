import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import ConnectBusiness from "./ConnectBusiness";
import axios from "axios";

const SignUpBrand = () => {
  const [goToNext, setGoToNext] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [brandName, setBrandName] = useState("");
  const [pan, setPan] = useState("");
  const [GSTIN, setGSTIN] = useState("");
  const [category, setCategory] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const signUp = async () => {
    const requestBody = {
      username: username,
      brand_name: brandName,
      email_id: email,
      password: password,
      category: category,
      pan_number: pan,
      gst_number: GSTIN,
      location: {
        type: "Point",
        coordinates: [lat, long],
      },
    };

    try {
      const response = await axios.post(
        "https://aggregator-tool-production.onrender.com/api/brand/register",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Registration successful:", response.data);
      return { flag: true, response: response.data };
    } catch (error) {
      console.error("Registration failed:", error.response ? error.response.data : error.message);
      return { flag: false, response: error.response ? error.response.data : error.message };
    }
  };
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          background: `url(
          "https://thesulfurgroup.com/wp-content/uploads/2017/12/collage-std.png"
        )`,
          backgroundColor: "#FFF",
          opacity: 0.1,
          position: "absolute",
          zIndex: "-1",
        }}
      ></div>
      <a href="/" className="fixed">
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
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
              <div
                style={{
                  color: "#E65C55",

                  fontSize: 30,
                }}
              >
                SARVIN
              </div>
              <i style={{ fontSize: 14 }}>For Businesses/Brands</i>
            </div>
          </span>
        </span>
      </a>
      <div className="h-screen w-full">
        <div className="h-screen w-full flex justify-center items-center">
          <div className="h-full w-full md:h-[70vh] md:w-[50vw] lg:h-[70vh] lg:w-[40vw] xl:w-[32vw]">
            {!goToNext && (
              <CreateAccount
                setGoToNext={setGoToNext}
                goToNext={goToNext}
                setEmail={setEmail}
                setPassword={setPassword}
                setUsername={setUsername}
              />
            )}
            {goToNext && (
              <ConnectBusiness
                setBrandName={setBrandName}
                setPan={setPan}
                setGSTIN={setGSTIN}
                setCategory={setCategory}
                setLat={setLat}
                setLong={setLong}
                signUp={signUp}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpBrand;
