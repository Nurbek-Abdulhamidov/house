import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const mapStyle = {
  position: "relative",
  left: 0,
  top: 0,
  width: "100wh",
  height: "50vh",
  overflow: "hidden",
};

const Yandex = ({ center }) => {
  const defaultState = { center: center || [41.2995, 69.2401], zoom: 13 };
  return (
    <YMaps
      query={{ apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b", leng: "EN" }}
    >
      <Map style={mapStyle} defaultState={defaultState}>
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  );
};

export default Yandex;
