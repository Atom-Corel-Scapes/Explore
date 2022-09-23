import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailData } from "../../Redux/Slice/DetailData";
import Logo from "../Images/Explore.jpg"
import { Link } from "react-router-dom";
import Moment from "react-moment";

import "./DetailPage.css";
const DetailsPage = () => {

  const [placeData, setData] = useState("");
  const { data } = useSelector((state) => state.detailData);
  useEffect(() => {
    setData(data)
  }, [data]);
  console.log(placeData);
  return (<>
    <div className="nav">
    <img className='Logo' src={Logo} />
    <Link to="/LandingPage" ><button className="back-btn">Take Back</button></Link>
    </div>
    <div className="outer">
      <div className="content">
        <div className="text-content">
          <h1 className="tittle">{placeData.placeName}</h1>
          <p className="hashtag">{placeData.placeTag}</p>
          <p className="text">
            {placeData.placeDescription}
          </p>
          <p className="creator">Created By:MasterClass</p>
          <p className="duration"><Moment fromNow>{placeData.createdAt}</Moment></p>
        </div>
        <div className="image">
          <img
            className="detail-image"
            src="https://hdwallpaperim.com/wp-content/uploads/2017/08/31/149631-HDR-France-Paris-cityscape.jpg"
            alt="paris"
          />
        </div>
      </div>
    </div>
  </>

  );
};
export default DetailsPage;
