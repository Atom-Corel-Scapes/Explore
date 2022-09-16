import React from 'react'
import "./LandingPage.css"
import Logo from "../Images/Explore.jpg"
import logOutLogo from "../Images/carbon_power.svg"
import { Link } from 'react-router-dom'
import { mock } from '../mockdata/mockdata.js'
import { UploadData } from '../../Redux/UploadSlice'
import ReactPaginate from "react-paginate"
import { useDispatch, useSelector } from 'react-redux'


const LandinPage = () => {

    const dispatch = useDispatch();
    const upload = (e) => {
        e.preventDefault();
        const ele = e.target.elements
        const title = ele[0].value;
        const message = ele[1].value;
        const tag = ele[2].value;
        const image = ele[3].files;
        console.log({ title, message, tag, image });
        dispatch(UploadData({ title, message, tag, image }))
        ele[0].value = "";
        ele[1].value = "";
        ele[2].value = "";
        ele[3].value = "";
    }
    const clear = (e) => {
        const ele = e.target.elements
        console.log(ele);
        ele[0].value = "";
        ele[1].value = "";
        ele[2].value = "";
        ele[3].value = "";
    }
    //const [Display, loading] = useSelector((state) => state.Displaydata);
    //console.log(Display);
    //console.log(mock);
    const handelPageChange = (data) => {
        const Page = data.selected;
        console.log(Page);
    }
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
                            <div className='card h-100'>
                                <img src={obj.img} className="card-img-top" alt='img'></img>
                                <div className='card-body'>
                                    <p className='Card_username'>@{obj.username}</p> <p className='Tags'>{obj.tags}</p><h3 className='card-title'>{obj.name}</h3>
                                    <p className='card-text'>{obj.discripition}</p></div>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div><div className='Search_block'>
                    <input type="text" placeholder='  Search *' className="" required={true}></input>
                    <input type="text" placeholder='  Search Tag *' className="" required={true}></input>
                    <div className='d-grid gap-2'><button className="btn_searchs">SEARCH</button></div>
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
                        containerClassName={'pagination justify-content-center  '}
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

export default LandinPage