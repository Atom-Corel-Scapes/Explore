import React from 'react'
import "./LandingPage.css"
import { useEffect } from 'react'
import Logo from "../Images/Explore.jpg"
import logOutLogo from "../Images/carbon_power.svg"
import { Link } from 'react-router-dom'
import { mock } from '../mockdata/mockdata.js'
import ReactPaginate from "react-paginate"
import { Displaydata } from '../../Redux/Slice/DisplayData'
import {SearchData} from "../../Redux/Slice/SearchSlice"
import { useDispatch, useSelector } from 'react-redux'
import { UploadData } from '../../Redux/Slice/UploadSlice'


const LandingPage = () => {
    const dispatch = useDispatch();
    const upload = (e) => {
        e.preventDefault();
        const ele = e.target.elements
        const placeName = ele[0].value;
        const placeDescription = ele[1].value;
        const placeTag = ele[2].value;
        const placeImage = ele[3].files;
        console.log({ placeName,placeDescription,placeTag,placeImage });
        dispatch(UploadData({ placeName,placeDescription,placeTag,placeImage }))
        ele[0].value = "";
        ele[1].value = "";
        ele[2].value = "";
        ele[3].value = "";
    }


  useEffect(() => {
    dispatch(Displaydata(1));
  }, [])
  
    const handelPageChange = (data) => {

        const page = data.selected;
        dispatch(Displaydata(page))

    }
    const { Display, loading } = useSelector((state) => state.Displaydata);
    console.log(Display);

   

    const handleDetailpage = (mock) => {
        console.log();
    }

    const handleSearch = (e) => { 
    
        
            e.preventDefault();
            const ele = e.target.elements;
            const location = ele[0].value;
            const tag = ele[1].value;
            ele[0].value ="";
            ele[1].value ="";  
            console.log(location,tag);
            dispatch(SearchData({location, tag}));
           
}
const{data,loadings} =useSelector((state) => state.Search);
console.log(data);
  
    
  


    
    return (
        <>
            <div className='NavBarConatiner'>
                <img className='Logo' src={Logo} />
                <div className='UserName_block'>
                    <div className='User_image_Block'>
                        <img src={logOutLogo} className='user_Image'></img></div>
                    <p className='UserName'>User</p>
                    <button className='Btn-signin-landing'><img src={logOutLogo}></img></button></div>

            </div>
            <div className='Main_Container'>
                <div className='row row-cols-1 row-cols-md-3 g-4' id='cards'>  {
                    mock.length > 0 && mock.map((obj) =>
                    (
                        <div className='col'>
                            <div className='card h-100'  onClick={handleDetailpage}>
                                <img src={obj.img} className="card-img-top" alt='img'></img>
                                <div className='card-body'>
                                    <p className='Tags'>{obj.tags}</p><h3 className='card-title'>{obj.name}</h3>
                                    <p className='card-text'>{obj.discripition}</p></div>

                            </div>
                        </div>

                    ))
                }
                    <div className="limit-input"> <input type="number" placeholder='Limit ' ></input></div>
                </div>
                <div className='Right-container'>
                    
                    
                        <form  onSubmit={handleSearch}>
                        <div className='Search_block'><input type="text" placeholder='  Search *' className="Searchby-name" required={true}></input>
                    <input type="text" placeholder='  Search Tag *' className="searchby-tags" required={true}></input>
                    <div className='d-grid gap-2'><button className="btn_searchs">SEARCH</button></div>
                    </div>
                    </form>
                    

                </div>
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
        </>


    )
}

export default LandingPage