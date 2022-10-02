import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../../resources/image1.jpg';
import image2 from '../../resources/image2.jpg';

const FinanceCarouselContainer = () => {
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
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img style={{
                    borderRadius: "10px",
                    width: "500px",
                    height: "400px",
                }}
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default FinanceCarouselContainer;