import Image from "next/image";
import MapIntegration from "./components/commons/MapIntegration";
import Filters from "./components/commons/Filters";
import EmbedMap from "./components/commons/EmbedMap";
import GlobalSearch from "./components/commons/GlobalSearch";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/commons/Navbar";
import SignIn from "./components/SignIn";
import Verification from "./components/Verification";
import OTPScreens from "./components/OTPScreen";
import Desktop3 from "./components/Desktop3Screen"
export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#f8f9ff",
        overflowX: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      {/* <Dashboard /> */}
      {/* <SignIn /> */}
      {/* <Verification /> */}
      {/* <OTPScreens /> */}
      <Desktop3 />
    </main>
  );
}
