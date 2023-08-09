import React from "react";
import useHome from "../../hooks/useHome";
import Banner from "../Banner/Banner";
import { TextExample, Seo, CustomSection } from "../";

const Home = ({ languaje }) => {
  let query = useHome();
  let data = null;

  if (languaje === "es") {
    data = query.sanityHomeES;
  } else {
    if (languaje === "de") {
      data = query.sanityHomeDE;
    } else {
      data = query.sanityHome;
    }
  }

  return (
    <>
      <Seo title="Home" description="" keywords="" />
      {data !== null ? (
        <div>
          {data.banner !== null ? <Banner banner={data.banner} /> : <></>}
          {data.dinamicContent !== null ? (
            <CustomSection sections={data.dinamicContent} />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          {languaje === "en" ? (
            <h2>Home in Sanity has no content</h2>
          ) : languaje === "es" ? (
            <h2>Home en Sanity no tiene contenido</h2>
          ) : languaje === "de" ? (
            <h2>Home in Sanity hat keinen Inhalt</h2>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
