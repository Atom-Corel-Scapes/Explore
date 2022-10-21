import React, { useState } from "react";
import "./DetailPageSuggest.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { suggestion } from "../../Redux/Slice/DetailSuggest";
import { detailData } from "../../Redux/Slice/DetailData";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
const PostSuggest = () => {

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [placeData, setData] = useState("");
  const { data } = useSelector((state) => state.suggestion);
  useEffect(() => {
    setData(data)
  }, [data]);
  console.log(placeData);

  const handleDetailpage = (e) => {
    //e.preventDefault()
    const ID = e.target.id;
    //console.log(ID);

    placeData.length > 0 && placeData.map((obj) => {
      if (obj.cardId === ID) {
        const Tag = obj.placeTag;
        console.log(Tag);
        dispatch(detailData({ ID, Tag }))
        dispatch(suggestion({ ID, Tag }))
        Navigate("/LandingPage/Detailpage")
      }
    })
  }

  return (
    <div main-div>
      <p className="message">you might also like:</p>
      <div className="outer-div"  onClick={(e) => handleDetailpage(e)}>
        {
          placeData.length > 0 && placeData.map((obj, index) => {
            return (<div className="container" id={obj.cardId} >
              <img
                className="suggest-image" id={obj.cardId}
                src="https://hdwallpaperim.com/wp-content/uploads/2017/08/31/149631-HDR-France-Paris-cityscape.jpg"
                alt="suggest"
              />
              <div className="top-left" id={obj.cardId}>
                <p>
                  Master Class
                  <br /><Moment fromNow>{obj.createdAt}</Moment>
                </p>
              </div>
              <div className="hashtags" id={obj.cardId}>
                <p>{obj.placeTag}</p>
              </div >
              <p className="place" id={obj.cardId}>{obj.placeName}</p>
              <p className="suggest-description" id={obj.cardId}>
                {obj.placeDescription}
              </p>
            </div>)
          })
        }

      </div>
    </div>
  )
};

export default PostSuggest;
