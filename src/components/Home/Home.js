import React, {useContext} from "react";
import useHome from "../../hooks/useHome";
import Banner from "../Banner/Banner";
import { Seo, CustomSection} from "../";
import { LanguageContext } from "../../context/languajeContext";


const Home = () => {
  let query = useHome()
  const { language } = useContext(LanguageContext);
  let data = null

  if (language === "es" ) {
    data = query.sanityHomeES;
  } else {
    if (language === "de" ) {
      data = query.sanityHomeDE;
  } else {
    data = query.sanityHome;
  }
}

    return <>
  <Seo title='Home' description='' keywords='' />
  {  data !== null ? <div>
  {data.banner !== null ? <Banner banner={data.banner}/> : <></>}
    {data.dinamicContent !== null ? <CustomSection sections={data.dinamicContent} /> : <></> } 
</div> : <div className="d-flex justify-content-center">
  {language === 'en' ? <h2>Home in Sanity has no content</h2> : 
  language === "es" ? <h2>Home en Sanity no tiene contenido</h2>: 
  language === "de" ? <h2>Home in Sanity hat keinen Inhalt</h2>: 
  <></>}
</div> }
</>

};

export default Home;
