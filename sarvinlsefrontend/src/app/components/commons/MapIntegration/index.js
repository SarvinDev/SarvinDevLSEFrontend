"use client";

import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import MapCards from "../MapCards/CreaterCard";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "20vh",
};
const center = {
  lat: 18.5214,
  lng: 73.8446, // default longitude
};

const MapIntegration = ({ h }) => {
  const mapContainerStyle = {
    width: "100vw",
    height: h,
  };

  const [map, setMap] = useState(null);
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  const markers = [
    {
      address: (
        <MapCards
          name="Rohit Sharma"
          img="https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=612x612&w=is&k=20&c=lfzJ5xpUSYkgNCsAK5UO6hcP0BDlAIJIXrDw-qlmktc="
        />
      ),
      lat: 18.5204,
      lng: 73.8467,
    },
    {
      address: (
        <MapCards
          name="Prajakta Koli"
          img="https://t3.ftcdn.net/jpg/03/18/04/12/360_F_318041202_dSFWSp38bnmiNxhLQnJDgnszmCoW7W0a.jpg"
        />
      ),
      lat: 18.5214,
      lng: 73.8446,
    },
    {
      address: (
        <MapCards
          name="Osama-Bin-Laden"
          img="https://media.istockphoto.com/id/1188563581/photo/head-shot-portrait-offended-upset-african-american-girl-feeling-bad.jpg?s=612x612&w=0&k=20&c=cY8vMx4MyrcaL0KfmFkHluHzx0ufQfh-XExtbMN1hm8="
        />
      ),
      lat: 18.5215,
      lng: 73.8469,
    },
    {
      address: (
        <MapCards
          name="Lebron James"
          img="https://media.istockphoto.com/id/1213961316/photo/thoughtful-puzzled-african-american-man-looking-aside-at-copy-space.jpg?s=612x612&w=0&k=20&c=Kj347KnMRdm9MXO7wOFWpmcARkL7XkcVBkJJiEnSuug="
        />
      ),
      lat: 18.5216,
      lng: 73.8447,
    },
    {
      address: (
        <MapCards
          name="Naman Agarwal"
          img="https://t4.ftcdn.net/jpg/02/61/52/95/360_F_261529596_YZWJaMnYFSCM0FSCrxs71o6RrZ9MpP4D.jpg"
        />
      ),
      lat: 18.5215,
      lng: 73.8471,
    },
  ];

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
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15.8}
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
                onCloseClick={() => {
                  setIsOpen(false);
                }}
              >
                <h3>{infoWindowData.address}</h3>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapIntegration;
