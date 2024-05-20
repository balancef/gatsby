
import React, {useState} from 'react';
import {
  APIProvider,
  Map
} from '@vis.gl/react-google-maps';

import "./ProfessionalsMap.scss";
import MapHandler from './mapHandler'
import { Markers } from './markers'

const GOOGLE_MAPS_API_KEY = process.env.GATSBY_GOOGLE_MAPS_API_KEY

const GoogleMap = ({professionals, logoAcademy, defaultPhoto, country}) => {
  const [mapCenter, setMapCenter] = useState({lat: 0, lng: 0})

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
      style={{
        borderRadius: "0 5px 5px 0px", 
        borderTop: "1px solid rgb(231, 231, 231)", 
        borderRight: "1px solid rgb(231, 231, 231)", 
        borderBottom: "1px solid rgb(231, 231, 231)"
      }}
      mapId='36948ac797603613'
      disableDefaultUI={true}
      gestureHandling='greedy'
      >
        <Markers points={professionals} logoAcademy={logoAcademy} defaultPhoto={defaultPhoto}/>
      </Map>
      <MapHandler country={country} />
    </APIProvider>
  );
}

export default React.memo(GoogleMap);