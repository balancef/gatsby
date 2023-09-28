import React, { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import { format } from "date-fns";
import { es, en, de } from "date-fns/locale";
import { LanguageContext } from "../../context/languajeContext";
import { PortableText } from "@portabletext/react";
//import { Link } from "gatsby";
//import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
//import "./Articles.scss";

const Article = (data) => {
  console.log("data:",data)

  const { language } = useContext(LanguageContext);

  function formatDate(fecha) {
    return format(new Date(fecha), "dd MMMM, yyyy", (language === "es" ? { locale: es } : language === "de" ? { locale: de } : { locale: en }));
  }





  return (
    <>
    {(data.banner !== null) ? <Banner banner={data.banner} /> : <></>}
    <div className="container py-5">
    {data.data?._createdAt && <p>{formatDate(data.data._createdAt)}</p>}
    {data.data?._rawContent && <PortableText value={data.data._rawContent} />}
    </div>
    
    </>
  )
}

export default Article;