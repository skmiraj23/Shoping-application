import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Usefullinks = () => {



    return (
        <>
            <div className="useful-link bg-dark text-white p-3">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <h4>USEFULL LINKS</h4>
                        <ul className="list-unstyled">
                            <li>Mens</li>
                            <li>Womens</li>
                            <li>Kids</li>
                            <li>Genz</li>
                            <li>Electronics</li>
                            <li>Gromming</li>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <h4>COUSTOMER POLICIES</h4>
                        <ul className="list-unstyled">
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>T&C</li>
                            <li>Track Order</li>
                            <li>Terms Of Use</li>
                            <li>Cancellation</li>
                            <li>Return</li>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-md-12 col-sm-12">
                        <h4>SOCIAL LINKS</h4>
                        <div className="so-lnk d-flex gap-4">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Usefullinks