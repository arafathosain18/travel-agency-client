import React from 'react';
import Traveller from '../../../Images/About.jpg';
const About = () => {
    return (
        <section className='row mt-5 pt-5 mb-5 '>

              <div className='col-md-3 offset-md-2 '>
                <img className='img-fluid' src={Traveller} alt=""/>
              </div>

              <div className='col-md-3 ms-5 '>
                  <h5>About Us</h5>
                  <h1>World Best Travel <br/> Agency Company <br/> Since 2008.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a doloremque aliquid fuga. Eos aliquid quidem totam asperiores perspiciatis deleniti. </p>
                    
                  <ul>
                        <li><p>Ratione voluptatem.sequi nesciunt.</p></li>
                        <li><p>Ratione voluptatem.sequi nesciunt.</p></li>
                        <li><p>Ratione voluptatem.sequi nesciunt.</p></li>
                        <li><p>Ratione voluptatem.sequi nesciunt.</p></li>
                        <li><p>Ratione voluptatem.sequi nesciunt.</p></li>
                 </ul>
                 <br/>
                <button className='btn btn-warning text-white'> Explore More</button>
              </div>

        </section>
    );
};

export default About;