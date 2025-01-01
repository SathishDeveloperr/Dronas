import React from 'react'
import './CardSection.css'
import { Link } from 'react-router-dom'

const CardSection = () => {
    return (
        <>
            <div className="container">
                <Link to='products'>
                
                <div className="card1" data-aos="zoom-in-left" data-aos-duration="800" >
                    <div className="top top1">
                    </div>
                    <div className="bottom">
                        <h1 className="heading">SOURCE CODE</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim, necessitatibus asperiores
                            ducimus ipsa praesentium odio earum iure adipisci corrupti.
                        </p>
                    </div>
                </div>
                </Link>
                <Link to='products'>
                
                <div className="card1" data-aos="zoom-in-left" data-aos-duration="900">
                    <div className="top top2" ></div>
                    <div className="bottom">
                        <h1 className="heading">SOURCE CODE</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim, necessitatibus asperiores
                            ducimus ipsa praesentium odio earum iure adipisci corrupti.
                        </p>
                    </div>
                </div>
                </Link>
                <Link to='products'>
                
                <div className="card1" data-aos="zoom-in-left" data-aos-duration="1000">
                    <div className="top top3"></div>
                    <div className="bottom">
                        <h1 className="heading">SOURCE CODE</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim, necessitatibus asperiores
                            ducimus ipsa praesentium odio earum iure adipisci corrupti.
                        </p>
                    </div>
                </div>
                </Link>
            </div>
        </>
    )
}

export default CardSection
