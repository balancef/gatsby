import React from "react";
import useHome from "../../hooks/useHome";
import Banner from "../Banner/Banner";
import { TextExample, Seo, CustomSection} from "../";


const Home = () => {
  const data = useHome().sanityHome;


  return <>
  <Seo title='Home' description='' keywords='' />
  {  data !== null ? <div>
  {data.banner !== null ? <Banner banner={data.banner}/> : <></>}
    {data.dinamicContent !== null ? <CustomSection sections={data.dinamicContent} /> : <></> } 
  <TextExample></TextExample>
</div> : <div className="d-flex justify-content-center">
  <h2>Home in Sanity has no content</h2>
</div> }
</>

};

export default Home;
