import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useGeolocation = () => {
  const [countryCode, setCountryCode] = useState(null);

  useEffect(() => {

    const apiKey = 'e6889c81cf7b4529a7dd8f062ef5848a';

  
    const fetchUserCountry = async () => {
      try {
        const response = await axios.get(`https://api.geoapify.com/v1/ipinfo?apiKey=${apiKey}`);
        setCountryCode(response.data.country.iso_code);
      } catch (error) {
        console.error('Error fetching user country:', error);
      }
    };
    fetchUserCountry();
  }, []);

  return countryCode

};

export default useGeolocation;



