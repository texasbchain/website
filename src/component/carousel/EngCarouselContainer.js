import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../../resources/image1.jpg';
import image2 from '../../resources/image2.jpg';
import near_hackathon_1 from '../../resources/near_hackathon_1.png'
import near_hackathon_2 from '../../resources/near_hackathon_2.png'

const EngCarouselContainer = () => {
    return (
        // all images must be the same size or else transition looks odd
        <Carousel fade={true} pause={true}>
            <Carousel.Item interval={10000}>
                <img style={{
                    borderRadius: "10px",
                    width: "500px",
                    height: "400px",
                }}
                    className="d-block w-100"
                    src={near_hackathon_1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First Texas Blockchain Hackathon</h3>
                    <p>Contestants working to finish their MVPs</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img style={{
                    borderRadius: "10px",
                    width: "500px",
                    height: "400px",
                }}
                    className="d-block w-100"
                    src={near_hackathon_2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>First Texas Blockchain Hackathon</h3>
                    <p>Here's some of the team that helped put it all together.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default EngCarouselContainer;