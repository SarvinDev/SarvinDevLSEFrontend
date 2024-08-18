"use client";

import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import MapCards from "../MapCards/CreaterCard";
import axios from "axios";

const libraries = ["places"];

// const center = {
//   lat: 28.744591075844735,
//   lng: 77.19285650657223, // default longitude
// };

const MapIntegration = ({ isTabletOrMobile }) => {
  const [map, setMap] = useState(null);
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  const [markers, setMarkers] = useState([]);
  const mapContainerStyle = {
    width: "100vw",
    height: isTabletOrMobile ? "80vh" : "40vh",
  };
  const [center, setCenter] = useState({
    lat: 28.744591075844735,
    lng: 77.19285650657223,
  });

  // const markers = [
  //   {
  //     address: (
  //       <MapCards
  //         name="Rohit Sharma"
  //         img="https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=612x612&w=is&k=20&c=lfzJ5xpUSYkgNCsAK5UO6hcP0BDlAIJIXrDw-qlmktc="
  //       />
  //     ),
  //     lat: 18.5204,
  //     lng: 73.8467,
  //   },
  //   {
  //     address: (
  //       <MapCards
  //         name="Prajakta Koli"
  //         img="https://t3.ftcdn.net/jpg/03/18/04/12/360_F_318041202_dSFWSp38bnmiNxhLQnJDgnszmCoW7W0a.jpg"
  //       />
  //     ),
  //     lat: 18.5214,
  //     lng: 73.8446,
  //   },
  //   {
  //     address: (
  //       <MapCards
  //         name="Osama-Bin-Laden"
  //         img="https://media.istockphoto.com/id/1188563581/photo/head-shot-portrait-offended-upset-african-american-girl-feeling-bad.jpg?s=612x612&w=0&k=20&c=cY8vMx4MyrcaL0KfmFkHluHzx0ufQfh-XExtbMN1hm8="
  //       />
  //     ),
  //     lat: 18.5215,
  //     lng: 73.8469,
  //   },
  //   {
  //     address: (
  //       <MapCards
  //         name="Lebron James"
  //         img="https://media.istockphoto.com/id/1213961316/photo/thoughtful-puzzled-african-american-man-looking-aside-at-copy-space.jpg?s=612x612&w=0&k=20&c=Kj347KnMRdm9MXO7wOFWpmcARkL7XkcVBkJJiEnSuug="
  //       />
  //     ),
  //     lat: 18.5216,
  //     lng: 73.8447,
  //   },
  //   {
  //     address: (
  //       <MapCards
  //         name="Naman Agarwal"
  //         img="https://t4.ftcdn.net/jpg/02/61/52/95/360_F_261529596_YZWJaMnYFSCM0FSCrxs71o6RrZ9MpP4D.jpg"
  //       />
  //     ),
  //     lat: 18.5215,
  //     lng: 73.8471,
  //   },
  // ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          setCenter({
            lat: 28.744591075844735,
            lng: 77.19285650657223,
          });
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://sarvindevbackend.onrender.com/api/brand", {
        params: {
          lat: center.lat,
          lon: center.lng,
          radius: 4,
        },
      })
      .then((response) => {
        const fetchedMarkers = response.data.brandData.data.map((brand) => ({
          address: <MapCards name={brand.brand_name} img={brand.image_link} />,
          lat: brand.location.coordinates[1],
          lng: brand.location.coordinates[0],
        }));
        setMarkers(fetchedMarkers);
      })
      .catch((error) => {
        console.error("Error fetching brand data:", error);
      });
  }, []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAP34ET_j5EOqfroU_y7izR6IAcrPt-NhY",
    libraries,
  });
  const onLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  // const markers = [
  //   { lat: 18.5204, lng: 73.8567 },
  //   { lat: 18.5314, lng: 73.8446 },
  //   { lat: 18.5642, lng: 73.7769 },
  // ];

  const handleMarkerClick = (id, lat, lng, address) => {
    console.log(lat, lng, address);
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10.8}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markers.map(({ address, lat, lng }, ind) => (
          <Marker
            key={ind}
            position={{ lat, lng }}
            onClick={() => {
              handleMarkerClick(ind, lat, lng, address);
            }}
          >
            {isOpen && infoWindowData?.id === ind && (
              <InfoWindow
                headerContent={<h3>InfoWindow Header Content</h3>}
                onCloseClick={() => {
                  setIsOpen(false);
                }}
                disableAutoPan
                minWidth={2000}
              >
                <h2>{infoWindowData.address}</h2>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapIntegration;
