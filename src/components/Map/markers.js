import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  Marker,
  InfoWindow,
  useMap,
  useMarkerRef
} from '@vis.gl/react-google-maps';
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import SanityImage from "gatsby-plugin-sanity-image";
import verifiedImg from "../../images/verified_badge.png";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import farrierAndTrimmerIcon from "../../images/mapIcons/trimmerProfessional.png"
import farrierIcon from "../../images/mapIcons/farrierProfessional.png"
import trimmerIcon from "../../images/mapIcons/farrierAndTrimmerProfessional.png"
import masterImg from "../../images/master.png";
import { LanguageContext } from "../../context/languajeContext";
import "./ProfessionalsMap.scss";

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

export const CustomMarker = ({point, logoAcademy,defaultPhoto, setMarkerRef, windowSize, language}) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useMarkerRef();

  const texts = {
    es: {
      moreInfo: "Más información"
    },
    de: {
      moreInfo: "Mehr Info"
    },
    en: {
      moreInfo: "More info"
    }
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

  const handleMarkerClick = (professional) => {
    if(windowSize?.windowWidth < 992) {
      setInfowindowOpen(true)
      return;
    }
    window.open(`/${language}/professional/${professional.slug.current}`, '_blank').focus();
  }

  const getProfessionalCardUrl = (professional) => {
    return `/${language}/professional/${professional.slug.current}`
  }

  useEffect(() => {
    setMarkerRef(marker, point.id)
  })
  
  return (
    <>
    <Marker
      icon={getProfessionalProfesionIcon(point.profession)}
      position={{ lat: point.location.lat, lng: point.location.lng }}
      key={point.id}
      ref={markerRef}
      onMouseOver={() => setInfowindowOpen(true)}
      onClick={() => handleMarkerClick(point)}
      onMouseOut={() => setInfowindowOpen(false)}
      >
    </Marker>
    {infowindowOpen && (
      <InfoWindow
      headerDisabled={true}
      position={{lat: point.location.lat, lng: point.location.lng}}
      pixelOffset={[0, -40]}
      onClose={() => setInfowindowOpen(false)}>
        {windowSize?.windowWidth < 992 &&(<div style={{display: "flex", justifyContent: "end", paddingBottom: "3px"}}>
          <FaTimes style={{cursor: "pointer"}} onClick={() => setInfowindowOpen(false)}/>
        </div>)}
        <div style={{ backgroundColor: 'white', color: 'black', display:"flex", flexDirection: "row", alignItems: "center" }}>
          <div style={{flexDirection: "colum", alignItems: "baseline"}}>
          {point.image?.image ? (
            <SanityImage
              {...point.image.image}
              className="map-professional__image"
              alt={`${point.name}`}
            />
          ) : (
            <SanityImage
            {...defaultPhoto}
            alt={`${point.name}`}
            className="map-professional__image"
          />
          )}
            
          </div>
          <div style={{flexDirection: "colum", marginLeft: "12px"}}>
            <div style={{display: "flex", alignItems: "center"}}>
              <span style={{marginBottom: 0, fontSize: "18px", fontWeight: "bold"}}>{point.name}</span>
              {point.verified && (
                <img
                  src={verifiedImg}
                  alt="verified"
                  style={{width: "18px", height: "18px", marginLeft: "5px"}}
                />
              )}
            </div>
            {point.ranking && (
              <RankingComponent ranking={point.ranking.ranking}/>
            )} 
            {point.profession.length > 0 && (
              <div style={{marginTop: "3px"}}>
                <span>{point.profession.map((item) => item.profession).join(", ")}</span>
              </div>
            )}
            {point.official && (
              <SanityImage
                {...logoAcademy}
                alt={`${point.name}`}
                className="map-professional__academy-image"
              />
            )} 
            {windowSize?.windowWidth <= 992 &&(
            <div style={{marginTop: "3px"}}>
              <a href={getProfessionalCardUrl(point)} rel="noreferrer" target='_blank'>{texts[language].moreInfo}</a>
            </div>)}
          </div>
        </div>
      </InfoWindow> 
    )}  
    </>
  )
}

export const Markers = ({points, logoAcademy, defaultPhoto, windowSize}) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const { language } = useContext(LanguageContext);
  const clusterer = useRef(null);

  // Initialize MarkerClusterer
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({map});
    }
  }, [map]);

  // Update cluster markers
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  useEffect(() => {
    setMarkers({})
  }, [points])

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers(prev => {
      if (marker) {
        return {...prev, [key]: marker};
      } else {
        const newMarkers = {...prev};
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {points.map(point => (
        <CustomMarker 
          key={point.id} 
          point={point} 
          logoAcademy={logoAcademy} 
          defaultPhoto={defaultPhoto} 
          setMarkerRef={setMarkerRef} 
          windowSize={windowSize}
          language={language}
        />
      ))}
    </>
  );
};