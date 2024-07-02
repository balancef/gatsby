
import React, {useState} from 'react';
import useWindowSize from "../../hooks/useWindowSize";
import {
  APIProvider,
  Map
} from '@vis.gl/react-google-maps';

import "./ProfessionalsMap.scss";
import MapHandler from './mapHandler'
import { Markers } from './markers'

const GOOGLE_MAPS_API_KEY = process.env.GATSBY_GOOGLE_MAPS_API_KEY

const GoogleMap = ({professionals, logoAcademy, defaultPhoto, country, mapFitBounds}) => {
  const [mapCenter, setMapCenter] = useState({lat: 0, lng: 0})
  const dimensions = useWindowSize();

  const fullscreenMapStyle = {
    borderRadius: "0 10px 10px 0px",
    borderTop: "1px solid rgb(231, 231, 231)", 
    borderRight: "1px solid rgb(231, 231, 231)", 
    borderBottom: "1px solid rgb(231, 231, 231)"
  }
  const mobileMapStyle = {
    borderRadius: "10px 10px 10px 10px", 
    borderTop: "1px solid rgb(231, 231, 231)", 
    borderRight: "1px solid rgb(231, 231, 231)", 
    borderBottom: "1px solid rgb(231, 231, 231)",
    borderLeft: "1px solid rgb(231, 231, 231)"
  }

  const handleCenterChanged = (data) => {
    setMapCenter(data.detail.center)
  }

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Map
      defaultCenter={{lat: 0, lng: 0}}
      center={mapCenter}
      onCenterChanged={handleCenterChanged}
      defaultZoom={2}
      disableDefaultUI={true} 
      streetViewControl={false}
      zoomControl={true}
      fullscreenControl={true}
      style={dimensions.windowWidth <= 992 ? mobileMapStyle : fullscreenMapStyle}
      mapId='36948ac797603613'
      gestureHandling='greedy'
      >
        <Markers points={professionals} logoAcademy={logoAcademy} defaultPhoto={defaultPhoto} windowSize={dimensions}/>
      </Map>
      <MapHandler country={country} mapFitBounds={mapFitBounds}/>
    </APIProvider>
  );
}

export default GoogleMap;