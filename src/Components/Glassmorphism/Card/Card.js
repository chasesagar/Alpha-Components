import React, { useEffect, useRef } from 'react';
import './Card.css';
// icons import
import  * as FaIcons  from "react-icons/fa";
// vanila tilt js import
import VanillaTilt from 'vanilla-tilt';

// Vanila tilt function 

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
}

export default function Card() {
    const options = {
        scale: 1.2,
        speed: 1000,
        max: 25,
    };
    const handleClick = () => {
        <CardBack />
    }
    return (
        <>
            
            <section>
                <div className="container">
                    <Tilt options={options}>
                        <div className="card">
                            <div className="content">
                                <div className="imgBx">
                                    <img src={`${process.env.PUBLIC_URL}/glass/prachi1.png`} />
                                </div>
                                <div className="contentBx">
                                    <h3>Special Prachi 
                                        <br />
                                        <span>Happy Birthday</span>
                                    </h3>
                                </div>
                            </div>
                            <ul className="sci">
                                <li>
                                    <a onClick={handleClick}><FaIcons.FaBirthdayCake /></a>
                                </li>
                            </ul>
                        </div>
                    </Tilt>
                </div>
            </section>
            
        </>
    )
}



function CardBack() {
    const options = {
        scale: 1.2,
        speed: 1000,
        max: 25,
    };
    return (
        <>
            <section>
                <div className="container">
                    <Tilt options={options}>
                        <div className="card">
                            <div className="content">
                                <div className="contentBx">
                                    <h3>Special Prachi 
                                        <br />
                                        <span>Happy Birthday</span>
                                    </h3>
                                </div>
                            </div>
                            <ul className="sci">
                                <li>
                                    <a href="#"><FaIcons.FaBirthdayCake /></a>
                                </li>
                            </ul>
                        </div>
                    </Tilt>
                </div>
            </section>
        </>
    )
}
