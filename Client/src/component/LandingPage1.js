import React from 'react'
import "./css/LandingPage1.css"

function LandingPage1() {
    return (
        <div className='main'>
            <div className='view'>
                
            </div>
            <div className='Search-Upload'>
                <form className='search'>
                    <input className='box01' type="text" placeholder='Search *' required></input>
                    <input className='box02' type="text" placeholder='Search Tags *' required></input>
                    <button className='btn01'>Search</button>
                </form>
                <form className='upload'>
                    <p className='text1'>Create a Explore</p>
                    <input className='box11' type="text" placeholder='Title *' required></input>
                    <input className='box12' type="text" placeholder='Message'></input>
                    <input className='box13' type="text" placeholder='Tags'></input>
                    <button className='btn11'>Choose File</button>
                    <p className='text2'>No file is Chosen</p>
                    <button className='btn12'>Submit</button>
                    <button className='btn13'>Clear</button>
                </form>
            </div>
        </div>
    )
}

export default LandingPage1