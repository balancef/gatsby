import {useMap, useMapsLibrary} from '@vis.gl/react-google-maps';
import React, {useEffect} from 'react';

const MapHandler = ({country}) => {
  const map = useMap();
  const geocodingLib = useMapsLibrary('geocoding')

  useEffect(() => {
    const fetchReverseGeocoding = async () => {
      if (!map || !geocodingLib) return;
      if(!country || country.length === 0) {
        map.setCenter({lat: 0, lng: 0})
        map.setZoom(2)
        return;
      } 
      const geoCodeAPI = new geocodingLib.Geocoder()
      const response = await geoCodeAPI.geocode({address: country})
      try {
        if(response.results.length > 0) {
          map.fitBounds(response.results.at(0).geometry?.viewport)
        } else {
          console.log(`No results found for country ${country}`)
        }
      } catch (error) {
        console.error("Error fetching reverse geocoding:", error);
      }
    }
    fetchReverseGeocoding()
  }, [country, map, geocodingLib]);

  return null;
};

export default React.memo(MapHandler);