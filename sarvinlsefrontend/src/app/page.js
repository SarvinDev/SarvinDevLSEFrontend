import ListCard from "./components/commons/listView/ListCard";
import CategoryIcon from "./components/commons/categoryIcons/CategoryIcon";
import Image from "next/image";
import MapIntegration from "./components/commons/MapIntegration";
import Filters from "./components/commons/Filters";
import EmbedMap from "./components/commons/EmbedMap";
import GlobalSearch from "./components/commons/GlobalSearch";
import Desktop2 from "./pages/Desktop2/Desktop2";

export default function Home() {
  return (
    <main>
      {/* <MapIntegration /> */}
      {/* <EmbedMap /> */}
      {/* <Filters />
      <ListCard />
      <CategoryIcon /> */}
      {/* <GlobalSearch /> */}
      <Desktop2 />
    </main>
  );
}
