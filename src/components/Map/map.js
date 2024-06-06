
import React, {useState, useEffect} from 'react';
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
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
});

  const fullscreenMapStyle = {
    borderRadius: "0 5px 5px 0px", 
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

  useEffect(() => {
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Map
      defaultCenter={{lat: 0, lng: 0}}
      center={mapCenter}
      onCenterChanged={handleCenterChanged}
      defaultZoom={2} 
      style={windowSize.width < 768 ? mobileMapStyle : fullscreenMapStyle}
      mapId='36948ac797603613'
      disableDefaultUI={true}
      gestureHandling='greedy'
      >
        <Markers points={professionals} logoAcademy={logoAcademy} defaultPhoto={defaultPhoto} windowSize={windowSize}/>
      </Map>
      <MapHandler country={country} />
    </APIProvider>
  );
}

export default GoogleMap;