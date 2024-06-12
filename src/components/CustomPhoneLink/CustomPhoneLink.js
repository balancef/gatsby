import React, {useState, useContext} from "react";
import "./CustomLink.scss";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { LanguageContext } from "../../context/languajeContext";

function CustomPhoneLink({ href, icon, type, text, target }) {
  const { language } = useContext(LanguageContext);
  const [showToasNotification, setShowToastNotification] = useState(false);
  
  let renderedElement;

  const handleCopy = async () => {
    const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i) ? true : false
    if(!isMobile) {
      try {
        await navigator.clipboard.writeText(text);
        setShowToastNotification(true)
        return
      } catch (err) {
        console.error('Failed to copy: ', err);
        return
      }
    }
    window.open(`tel:${text}`);
  };

  const targetAttribute = type === "icon" ? "_blank" : "_self";

  if (type === "link-secondary") {
    renderedElement = <small className="mb-0">{text}</small>;
  } else if (type === "icon") {
    renderedElement = "";
  } else {
    renderedElement = <p className="mb-0">{text}</p>;
  }

  const notificationI18nMessages = {
    en: "Phone number has been copied",
    es: "Número de teléfono copiado",
    de: "Telefonnummer wurde kopiert"
  }

  return (
    <>
    <ToastContainer position="bottom-center" className="p-3">
      <Toast bg="dark" onClose={() => setShowToastNotification(false)} show={showToasNotification} delay={2000} autohide>
        <Toast.Body>{language ? notificationI18nMessages[language] : notificationI18nMessages.en}</Toast.Body>
      </Toast>
    </ToastContainer>
    <a
      onClick={() => handleCopy()} 
      title={text}
      className={`custom-link ${type}`}
      target={target || targetAttribute}
    >
      {renderedElement}
      {icon && icon}
    </a>
    </>
  );
}

export default CustomPhoneLink;
