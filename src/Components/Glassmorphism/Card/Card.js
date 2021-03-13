import React, { useState, useEffect, useRef } from 'react';
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
    const [card, setCard] = useState(true)
    
    const handleClick = () => {
        setCard(!card)
    }
    return (
        <>
        {card ? <CardFront handleClick={handleClick} /> : <CardBack  handleClick={handleClick} /> }
        </>
    )
}

function CardFront(props) {
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
                                    <a onClick={props.handleClick}><FaIcons.FaBirthdayCake /></a>
                                </li>
                            </ul>
                        </div>
                    </Tilt>
                </div>
            </section>
        </>
    )
}

function CardBack(props) {
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
                                        <br />
                                        <span>Now that your life has one less year, I hope that this birthday will push you to go for your dreams which you have been contemplating for the last 5 years. Time and circumstances will never be perfect to take upon the action. Enjoy the Birthday but also know that life is precious and often flows by very quickly.So keep smiling Girl and be Yourself.</span>
                                    </h3>
                                </div>
                            </div>
                            <ul className="sci">
                                <li>
                                    <a onClick={props.handleClick}><FaIcons.FaBirthdayCake /></a>
                                </li>
                            </ul>
                        </div>
                    </Tilt>
                </div>
            </section>
        </>
    )
}
