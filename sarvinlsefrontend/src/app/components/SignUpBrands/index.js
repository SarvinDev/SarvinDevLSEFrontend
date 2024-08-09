import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import ConnectBusiness from "./ConnectBusiness";

const SignUpBrand = () => {
  const [goToNext, setGoToNext] = useState(false);
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
        {/* Your logo */}
      </a>
      <div className="h-screen w-full">
        <div className="h-screen w-full flex justify-center items-center">
          <div className="h-full w-full md:h-[70vh] md:w-[50vw] lg:h-[70vh] lg:w-[40vw] xl:w-[32vw]">
            {!goToNext && <CreateAccount setGoToNext={setGoToNext} goToNext={goToNext}/>}
            {goToNext && <ConnectBusiness /> }
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpBrand;
