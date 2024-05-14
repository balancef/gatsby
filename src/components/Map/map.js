
import React, {useState, useEffect} from 'react';
import {
  APIProvider,
  Marker,
  InfoWindow,
  Map,
  ControlPosition
} from '@vis.gl/react-google-maps';
import axios from "axios";
import farrierAndTrimmerIcon from "../../images/mapIcons/trimmerProfessional.png"
import farrierIcon from "../../images/mapIcons/farrierProfessional.png"
import trimmerIcon from "../../images/mapIcons/farrierAndTrimmerProfessional.png"
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import masterImg from "../../images/master.png";
import SanityImage from "gatsby-plugin-sanity-image";
import "./ProfessionalsMap.scss";
import MapHandler from './mapHandler'

const GEOAPIFY_API_KEY = process.env.GATSBY_GEOAPIFY_API_KEY
const GOOGLE_MAPS_API_KEY = process.env.GATSBY_GOOGLE_MAPS_API_KEY


function RankingComponent({ ranking }) {
  if (ranking.includes("1")) {
    return (
      <div style={{marginTop: "3px"}}>
        <FaStar size={18} color='#FFA301' />
        <FaRegStar size={18} color='#FFA301'/>
        <FaRegStar size={18} color='#FFA301'/>
        <FaRegStar size={18} color='#FFA301'/>
        <FaRegStar size={18} color='#FFA301'/>
      </div>
    );
  } else if (ranking.includes("2")) {
    return (
      <div style={{marginTop: "3px"}}>
        <FaStar size={18} color='#FFA301'/>
        <FaStar size={18} color='#FFA301'/>
        <FaRegStar size={18} color='#FFA301'/>
        <FaRegStar size={18} color='#FFA301'/>
        <FaRegStar size={18} color='#FFA301'/>
      </div>
    );
  } else if (ranking.includes("3")) {
    return (
      <div style={{marginTop: "3px"}}>
        <FaStar size={18} color='#FFA301' />
        <FaStar size={18} color='#FFA301' />
        <FaStar size={18} color='#FFA301' />
        <FaRegStar size={18} color='#FFA301'/>
        <FaRegStar size={18} color='#FFA301'/>
      </div>
    );
  } else if (ranking.includes("4")) {
    return (
      <div style={{marginTop: "3px"}}>
        <FaStar size={18} color='#FFA301' />
        <FaStar size={18} color='#FFA301' />
        <FaStar size={18} color='#FFA301' />
        <FaStar size={18} color='#FFA301' />
        <FaRegStar size={18} color='#FFA301'/>
      </div>
    );
  } else if (ranking.includes("5")) {
    return (
      <div style={{marginTop: "3px"}}>
        <FaStar size={18} color='#FFA301' />
        <FaStar size={18} color='#FFA301' />
        <FaStar size={18} color='#FFA301' />
        <FaStar size={18} color='#FFA301' />
        <FaStar size={18} color='#FFA301' />
      </div>
    );
  } else if (ranking.toLowerCase() === "master") {
    return (
      <div style={{display: "flex", marginTop: "3px"}}>
        <img
          src={masterImg}
          alt="verified"
          height={16}
          width={14}
          style={{marginRight: "5px"}}
          className="professional__ranking_logo"
        />
        <span style={{fontWeight: "400", fontSize: "14px"}}>{ranking}</span>
      </div>
    );
  } else if (ranking.toLowerCase() === "supervisor") {
    return (
      <div style={{display: "flex", marginTop: "3px"}}>
        {/* <img
          src={masterImg}
          alt="verified"
          height={16}
          width={14}
          style={{marginRight: "10px"}}
          className="professional__ranking_logo"
        /> */}
        <span style={{fontWeight: "500", fontSize: "14px"}}>{ranking}</span>
      </div>
    );
  } else {
    return (
      <div style={{marginTop: "3px"}}>
        <FaRegStar size={18} color='#FFA301'/>
        <FaRegStar size={18} color='#FFA301'/>
        <FaRegStar size={18} color='#FFA301'/>
        <FaRegStar size={18} color='#FFA301'/>
        <FaRegStar size={18} color='#FFA301'/>
      </div>
    );
  }
}


const GoogleMap = ({professionals, logoAcademy, defaultPhoto, country}) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState({lat: 47.8561815, lng: 12.3490983})

  const handleMarkerMouseover = (professional) => () => {
    setActiveMarker({lat: professional.location.lat, lng: professional.location.lng, professional: professional});
  };

  const handleMarkerMouseout = () => {
    setActiveMarker(null);
  };

  const handleMarkerClick = (professional) => () => {
    window.open(`http://localhost:8000/search/${professional.slug.current}`, '_blank').focus();
  }

  const handleCenterChanged = (data) => {
    setMapCenter(data.detail.center)
  }

  const getProfessionalProfesionIcon = (professions) => {
    const farriersI18n = ["Herrador/a", "Farrier", "Hufschmied/in"]
    const trimmersI18n = ["Recortador/a de cascos", "Hufpfleger/in", "Trimmer"]
    if(!professions.find(item => farriersI18n.includes(item.profession)) && professions.find(item => trimmersI18n.includes(item.profession))) {
      return trimmerIcon
    }
    else if(professions.find(item => farriersI18n.includes(item.profession)) && !professions.find(item => trimmersI18n.includes(item.profession))) {
      return farrierIcon
    }
    else if(professions.find(item => farriersI18n.includes(item.profession)) && professions.find(item => trimmersI18n.includes(item.profession))) {
      return farrierAndTrimmerIcon
    }
    else return null
  }

  useEffect(() => {
    const fetchUserCountry = async () => {
      try {
        const response = await axios.get(
          `https://api.geoapify.com/v1/ipinfo?apiKey=${GEOAPIFY_API_KEY}`
        );
        setMapCenter({lat: response.data.location.latitude, lng: response.data.location.longitude})
        
      } catch (error) {
        console.error("Error fetching user country:", error);
      }
    };
    fetchUserCountry();
  }, []);

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Map 
      defaultCenter={mapCenter} 
      center={mapCenter}
      onCenterChanged={handleCenterChanged}
      defaultZoom={5} 
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
        {professionals.map((professional, index) => (
            <Marker
              icon={getProfessionalProfesionIcon(professional.profession)}
              key={index}
              position={{ lat: professional.location.lat, lng: professional.location.lng }}
              onCenterChanged={handleCenterChanged}
              onClick={handleMarkerClick(professional)}
              onMouseOver={handleMarkerMouseover(professional)}
              onMouseOut={handleMarkerMouseout}
            />
        ))}
        {activeMarker && (
          <InfoWindow
            pixelOffset={[0,-40]}
            position={{
              lat: activeMarker.lat,
              lng: activeMarker.lng
            }}
            onClose={handleMarkerMouseout}
          >
            <div style={{ backgroundColor: 'white', color: 'black', display:"flex", flexDirection: "row", alignItems: "center" }}>
              <div style={{flexDirection: "colum", alignItems: "baseline"}}>
              {activeMarker.professional.image?.image ? (
                <SanityImage
                  {...activeMarker.professional.image.image}
                  className="professional__image"
                  alt={`${activeMarker.professional.name}`}
                />
              ) : (
                <SanityImage
                {... defaultPhoto}
                alt={`${activeMarker.professional.name}`}
                className="professional__image"
              />
              )}
                
              </div>
              <div style={{flexDirection: "colum", marginLeft: "12px"}}>
                <div>
                  <span style={{marginBottom: 0, fontSize: "18px", fontWeight: "bold"}}>{activeMarker.professional.name}</span>
                </div>
                {activeMarker.professional.ranking && (
                  <RankingComponent ranking={activeMarker.professional.ranking.ranking}/>
                )} 
                {activeMarker.professional.profession.length > 0 && (
                  <div style={{marginTop: "3px"}}>
                    <span>{activeMarker.professional.profession.map((item) => item.profession).join(", ")}</span>
                  </div>
                )} 
              </div>
            </div>
          </InfoWindow>
      )}
      </Map>
      <MapHandler country={country} />
    </APIProvider>
  );
}

export default GoogleMap