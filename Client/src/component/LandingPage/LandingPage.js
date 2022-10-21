import React, { useState } from 'react'
import "./LandingPage.css"
import { useEffect } from 'react'
import Logo from "../Images/Explore.jpg"
import logOutLogo from "../Images/carbon_power.svg"
import { useNavigate } from 'react-router-dom'
import ReactPaginate from "react-paginate"
import { Displaydata } from '../../Redux/Slice/DisplayData'
import { SearchData } from "../../Redux/Slice/SearchSlice"
import { useDispatch, useSelector } from 'react-redux'
import { UploadData } from '../../Redux/Slice/UploadSlice'
import { detailData } from '../../Redux/Slice/DetailData'
import { suggestion } from '../../Redux/Slice/DetailSuggest'
import { getUser } from '../../Redux/Slice/loginSlice'
import { Link } from 'react-router-dom'
import Moment from "react-moment"

const LandingPage = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [mainData, setData] = useState("");

    const { loginData } = useSelector((state) => state.User);
    console.log(loginData.data);

    const upload = (e) => {
        e.preventDefault();
        const ele = e.target.elements
        const placeName = ele[0].value;
        const placeDescription = ele[1].value;
        const placeTag = ele[2].value;
        const placeImage = ele[3].files;
        const userFirstname = loginData.data
        console.log({ placeName, placeDescription, placeTag, placeImage, userFirstname });
        dispatch(UploadData({ placeName, placeDescription, placeTag, placeImage }))
        ele[0].value = "";
        ele[1].value = "";
        ele[2].value = "";
        ele[3].value = "";
    }
    const { Details, loadinguser } = useSelector((state) => state.uploaddata);
    useEffect(() => {

        setData(Details);
    }, [Details])

    useEffect(() => {
        dispatch(Displaydata(0));
    }, [])

    const handelPageChange = (data) => {

        const page = data.selected;
        dispatch(Displaydata(page))

    }
    const { Display, loading } = useSelector((state) => state.Displaydata);
    useEffect(() => {
        setData(Display)
    }, [Display])
    console.log(Display);



    const handleDetailpage = (e) => {
        //e.preventDefault()
        const ID = e.target.id;
        console.log(ID);

        mainData.length > 0 && mainData.map((obj) => {
            if (obj.cardId === ID) {
                const Tag = obj.placeTag;
                console.log(Tag);
                dispatch(detailData({ ID, Tag }))
                dispatch(suggestion({ ID, Tag }))
                Navigate("/LandingPage/Detailpage")
            }
        })


    }

    const handleSearch = (e) => {

        e.preventDefault();
        const ele = e.target.elements;
        const location = ele[0].value;
        const tag = ele[1].value;
        ele[0].value = "";
        ele[1].value = "";
        console.log(location, tag);
        dispatch(SearchData({ location, tag }));

    }
    // const { data, loadings } = useSelector((state) => state.Search);
    // console.log(data);

    // console.log(Display.placeImag)


    return (
        <>
            <div className='NavBarConatiner'>
                <img className='Logo' src={Logo} />
                <div className='UserName_block'>
                    <div className='User_image_Block'>
                        <img src={logOutLogo} className='user_Image'></img></div>
                    <p className='UserName'>{loginData.data}</p>
                    <Link to="/" ><button className='Btn-signin-landing'><img src={logOutLogo}></img></button></Link>
                </div>

            </div>
            <div className='Main_Container'>
                <div className='row row-cols-1 row-cols-md-3 g-4' id='cards'>  {
                    mainData.length > 0 && mainData.map((obj, index) => {


                        //const Base64String = btoa(String.fromCharCode(...new Uint8Array(Display[1].placeImage.data.data)));

                        return (<div className='col' key={index} onClick={(e) => handleDetailpage(e)}>
                            <div className='card h-100' id={obj.cardId}>
                                <img className="card-img-top" src="https://hdwallpaperim.com/wp-content/uploads/2017/08/31/149631-HDR-France-Paris-cityscape.jpg" alt="paris" />
                                <div className='card-body' id={obj.cardId} >
                                    <p className='Tags' id={obj.cardId}>{obj.placeTag}</p>
                                    <h3 className='card-title' id={obj.cardId} >{obj.placeName}</h3>
                                    <p className='card-text' id={obj.cardId} >{obj.placeDescription}</p>
                                    <p id={obj.cardId}><Moment id={obj.cardId} fromNow>{obj.createdAt}</Moment></p>
                                </div>
                            </div>
                        </div>
                        )

                    }
                    )
                }
                </div>
                <div className='Right-container'>
                    <div>
                        <form onSubmit={handleSearch}>
                            <div className='Search_block'><input type="text" placeholder='  Search *' className="Searchby-name" required={true}></input>
                                <input type="text" placeholder='  Search Tag *' className="searchby-tags" required={true}></input>
                                <div className='d-grid gap-2'><button className="btn_searchs">SEARCH</button></div>
                            </div>
                        </form>



                        <form onSubmit={upload}>
                            <div className='Upload_Block'>
                                <div className='Upload_Header'>Create a Explore</div>
                                <input type="text" placeholder='  Title *' className="Upload_Title" required={true}></input>
                                <input type="text" placeholder='  Message *' className='Message_Text' required={true}></input>
                                <input type="text" placeholder='  Tags *' required={true}></input>
                                <input type="file" required={true}></input>
                                <button className='btn btn-primary' type='submit'>SUBMIT</button>
                                <button type='reset'>CLEAR</button>
                            </div>
                        </form>
                    </div>




                    <ReactPaginate


                        previousLabel={'<<'}
                        nextLabel={'>>'}
                        breakLabel={'..'}
                        pageCount={9}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={1}
                        containerClassName={'pagination justify-content-center '}
                        onPageChange={handelPageChange}
                        pageClassName={'page-item'}
                        previousClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        activeClassName={'active'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'} />
                </div>
            </div></>


    )
}

export default LandingPage