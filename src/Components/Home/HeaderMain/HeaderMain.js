import React from 'react';
import style from '../HeaderMain/HeaderMain.css';


const HeaderMain = () => {
    return (
            <main style={{height:'900px'}} className='d-flex align-items-center'>
                <div  className='offset-md-1 text-white'>
                    <h1 style={{fontSize:'80px'}}>Explore Your <br/> Travel</h1>
                    <br/>
                    <h4>Discover your next great adventure, become an explorer to get started</h4>
                    <br/>
                    <button className="btn btn-lg btn-primary">Book Now</button>
                </div>
            </main>
        
    );
};

export default HeaderMain;