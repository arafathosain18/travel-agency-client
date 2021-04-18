import React from 'react';
import '../Footer/Footer.css';
import Footerdetails from '../Footerdetails/Footerdetails';


const Footer = () => {
    
    const ourAddress = [
        {name: "Flat 20, Reynolds Neck, North Helenaville, FV77 8WS"}
        
       
    ]
    const Destination = [
        {name: "Moscow Red City Land"},
        {name: "Los Vegas , America"},
        {name: "California, America"},
        {name: "Rome's Colosseum"},
     
    ]
    const services = [
        {name: "About Us"},
        {name: "How it Works"},
        {name: "Our Blog"},
        {name: "Our Services"},
        {name: "Contact Us"},
        {name: "Listing"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                
                    <Footerdetails key={1} menuTitle="Services" menuItems={services}/>
                    <Footerdetails key={2} menuTitle="Destination" menuItems={Destination}/>
                    <Footerdetails key={3} menuTitle="Our Address" menuItems={ourAddress}> 
                        
                        <div className="mt-5">
                            <h6>Call us now</h6>
                            <br/>
                            <button className="btn btn-primary">+2(305) 587-3407</button>
                        </div>
                    </Footerdetails>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;