import React, { useContext, useEffect } from "react";
import "./Professionals.scss";
import CertificateIcon from "../../images/certificate-outline.png"
import {
  FaStar,
  FaGraduationCap,
  FaRegClock,
  FaPhoneAlt,
  FaRegStar,
  FaShareAlt
} from "react-icons/fa";
import {
  MdInfo,
  MdLocationOn,
  MdEmail,
  MdMoreTime,
} from "react-icons/md";
import { LanguageContext } from "../../context/languajeContext";
import SanityImage from "gatsby-plugin-sanity-image";
import verifiedImg from "../../images/verified_badge.png";
import masterImg from "../../images/master.png";
import { PortableText } from "@portabletext/react";
import { BsGlobe } from "react-icons/bs";
import { CustomLink } from "..";
import { format } from "date-fns";
import { Button } from 'react-bootstrap';

const ProfessionalCard = ({
  logoAcademy,
  photo,
  ranking,
  defaultPhoto,
  official,
  verified,
  name,
  professions,
  services,
  address,
  slug,
  certificateNumber,
  certificateDate,
  lastCertificateUpdate,
  validTo,
  description,
  phone,
  email,
  bccEmails,
  emailSubject,
  emailBody,
  website,
  descriptionDefault,
}) => {
  const { language } = useContext(LanguageContext);

  const professionList = professions.map((item) => item.profession).join(", ");
  const serviceList = services.map((item) => item.services).join(", ");
  const bccEmailArray = bccEmails.split(",");

  const bccEmail1 = bccEmailArray[0] || "";
  const bccEmail2 = bccEmailArray[1] || "";

  function formatoFechas(fecha) {
    return format(new Date(fecha), "dd-MM-yyyy");
  }

  function ShareButton({url}) {
    const sharei18n = {es: "Compartir", en: "Share", de: "Aktie"}
    useEffect(() => {
        // Cargar el script de AddToAny
        const script = document.createElement('script');
        script.src = 'https://static.addtoany.com/menu/page.js';
        script.async = true;
        document.body.appendChild(script);

        // Configurar AddToAny para excluir servicios
        window.a2a_config = window.a2a_config || {};
        window.a2a_config.prioritize = [ 'sms', 'whatsapp', 'copy_link','email'];
        window.a2a_config.exclude_services = [
          "amazon_wish_list",
          "aol_mail",
          "balatarin",
          "bibsonomy",
          "blogger",
          "blogmarks",
          "bluesky",
          "bookmarks_fr",
          "box_net",
          "buffer",
          "diary_ru",
          "diaspora",
          "digg",
          "diigo",
          "douban",
          "draugiem",
          "evernote",
          "fark",
          "flipboard",
          "folkd",
          "google_classroom",
          "google_translate",
          "hacker_news",
          "hatena",
          "houzz",
          "instapaper",
          "kakao",
          "known",
          "line",
          "linkedin",
          "livejournal",
          "mail_ru",
          "mastodon",
          "mendeley",
          "meneame",
          "mewe",
          "micro_blog",
          "mix",
          "mixi",
          "myspace",
          "odnoklassniki",
          "outlook_com",
          "papaly",
          "pinboard",
          "pinterest",
          "plurk",
          "pocket",
          "print",
          "printfriendly",
          "pusha",
          "push_to_kindle",
          "qzone",
          "raindrop_io",
          "reddit",
          "rediff_mypage",
          "refind",
          "sina_weibo",
          "sitejot",
          "slashdot",
          "stocktwits",
          "svejo",
          "symbaloo_bookmarks",
          "teams",
          "threads",
          "threema",
          "trello",
          "tumblr",
          "twiddla",
          "twitter",
          "typepad",
          "viber",
          "wordpress",
          "wykop",
          "x",
          "xing",
          "yahoo_mail",
          "yummly",
          "kindle_it",
          "typepad_post",
          "rediff",
          "google_gmail",
          "wechat",
          "microsoft_teams"
        ];

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="a2a_kit a2a_kit_size_32 a2a_default_style" 
             data-a2a-url={url} 
             data-a2a-icon-color="#FFA301"
             data-a2a-title={name}>
            <a className="a2a_dd" href="https://www.addtoany.com/share" style={{marginTop: "20px"}}>
              <Button style={{backgroundColor: "#FFA301", borderColor: "#FFA301"}} size="sm">
                <FaShareAlt size={16} color='white' style={{marginRight: "10px"}}/>
                {sharei18n[language]}
                {/* Quitar default a2a icon */}
                <img alt="" style={{display: "none"}}/>
              </Button>
            </a>
        </div>
    );
};

  function RankingComponent({ ranking }) {
    if (ranking.includes("1")) {
      return (
        <div style={{marginTop: "3px"}}>
          <FaStar size={28} color='#FFA301' />
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
        </div>
      );
    } else if (ranking.includes("2")) {
      return (
        <div style={{marginTop: "3px"}}>
          <FaStar size={28} color='#FFA301'/>
          <FaStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
        </div>
      );
    } else if (ranking.includes("3")) {
      return (
        <div style={{marginTop: "3px"}}>
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
        </div>
      );
    } else if (ranking.includes("4")) {
      return (
        <div style={{marginTop: "3px"}}>
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaRegStar size={28} color='#FFA301'/>
        </div>
      );
    } else if (ranking.includes("5")) {
      return (
        <div style={{marginTop: "3px"}}>
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
          <FaStar size={28} color='#FFA301' />
        </div>
      );
    } else if (ranking.toLowerCase() === "master") {
      return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "3px"}}>
          <img
            src={masterImg}
            alt="verified"
            height={28}
            width={22}
            style={{marginRight: "5px"}}
            className="professional__ranking_logo"
          />
          <h6 style={{fontWeight: "600"}}>{ranking}</h6>
        </div>
      );
    } else if (ranking.toLowerCase() === "supervisor") {
      return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "3px"}}>
          <h6 style={{fontWeight: "600"}}>{ranking}</h6>
        </div>
      );
    } else {
      return (
        <div style={{marginTop: "3px"}}>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
          <FaRegStar size={28} color='#FFA301'/>
        </div>
      );
    }
  }

  return (
    <div className="container proContainer">
      <div className="professionalWrapper">
        <div className="leftContainer">
          <div className="professional__image">
            {photo ? (
              <SanityImage
                {... photo}
                alt={`${name}`}
                className="professional__image"
              />
            ) : (
              <SanityImage
                {... defaultPhoto}
                alt={`${name}`}
                className="professional__image"
              />
            )}
          </div>
          {ranking && (
            <div className="professional__ranking">
              <RankingComponent ranking={ranking} />
            </div>
          )}

          {official && (
            <div className="professional__logos">
                <SanityImage {...logoAcademy} alt={`Logo academy`} />
              </div>
          )}
        </div>
        <div className="rightContainer">
          <h5 className="professional__name">
            {name}{" "}
            {verified && (
              <img
                src={verifiedImg}
                alt="verified"
              />
            )}
          </h5>
          {professions.length > 0 && (
            <div className="professional__professions">
              <p>{professionList}</p>
            </div>
          )}
          {services.length > 0 && (
            <div className="professional__services">
              <MdInfo size={18} />
              <p>{serviceList}</p>
            </div>
          )}
          {address && (
            <div className="professional__address">
              <a
                href={`https://www.google.com/maps/search/?q=${encodeURIComponent(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <MdLocationOn size={18} />
                <br />
                <p>{address}</p>
              </a>
            </div>
          )}
            <div className="professional__information">
              {certificateNumber && (
                <div className="professional__information-dates">
                  <ul>
                    <li
                      title={
                        language === "es"
                          ? "Número de certificación"
                          : language === "en"
                          ? "Certification number"
                          : "Zertifizierungsnummer"
                      }
                    >
                      <FaGraduationCap size={18} />
                      {certificateNumber}
                    </li>
                    {certificateDate && (
                      <li
                        title={
                          language === "es"
                            ? "Fecha de certificación"
                            : language === "en"
                            ? "Certification date"
                            : "Zertifizierungsdatum"
                        }
                      >
                        <img alt="certification" style={{paddingRight: '5px', marginLeft: "5px"}} src={CertificateIcon}/>
                        {formatoFechas(certificateDate)}
                      </li>
                    )}
                    {lastCertificateUpdate && (
                      <li
                        title={
                          language === "es"
                            ? "Ultima actualización"
                            : language === "en"
                            ? "Last update"
                            : "<Letztes Update>"
                        }
                      >
                        <FaRegClock size={20} />
                        {formatoFechas(lastCertificateUpdate)}
                      </li>
                    )}
                    {validTo ? (
                      ranking.toLowerCase() === "master" ||
                      ranking.toLowerCase() === "supervisor" ? (
                        <></>
                      ) : (
                        <li
                          title={
                            language === "es"
                              ? "Válido hasta"
                              : language === "en"
                              ? "Valid To"
                              : "Gültig bis"
                          }
                        >
                          <MdMoreTime size={20} />
                          {formatoFechas(validTo)}
                        </li>
                      )
                    ) : (
                      <></>
                    )}
                  </ul>
                </div>
              )}
              <div className="professional__information-description">
                <PortableText
                  value={description ? description : descriptionDefault}
                />
              </div>
              {
                <div className="professional__information-contact">
                  <ul>
                    {phone && (
                      <li>
                        <FaPhoneAlt size={18} />
                        <CustomLink href={`phone:${phone}`} text={phone} />
                      </li>
                    )}
                    {email && (
                      <li>
                        <MdEmail size={18} />
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={`mailto:${encodeURIComponent(
                            email
                          )}?bcc=${encodeURIComponent(
                            bccEmail1
                          )}&bcc=${encodeURIComponent(
                            bccEmail2
                          )}&subject=${`${emailSubject}`}&body=${emailBody}

                          `}
                        >
                          {email}
                        </a>
                      </li>
                    )}
                    {website && (
                      <li>
                        <BsGlobe size={18} />
                        <CustomLink href={website} text={website} />
                      </li>
                    )}
                  </ul>
                </div>
              }
            </div>
            <div style={{marginTop: "10px"}}>
              <ShareButton url={window.location.href}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
