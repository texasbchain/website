import React from 'react';
import { Carousel } from 'react-bootstrap';
import './lancarouselcontainer.css';
import eoy_social_1 from '../../resources/eoy_social_1.png'
import eoy_social_2 from '../../resources/eoy_social_2.jpeg'
import near_hackathon_1 from '../../resources/near_hackathon_1.png'
import near_hackathon_2 from '../../resources/near_hackathon_2.png'
import pionex from '../../resources/pionex.png'

const LanCarouselContainer = () => {
    return (
        // all images must be the same size or else transition looks odd
        <div class="landingcarousel">
            <Carousel fade={true} pause={true}>
                <Carousel.Item interval={10000}>
                    <img style={{
                        borderRadius: "10%",
                        height: "400px",
                        objectFit: "cover"
                    }}
                        className="d-block w-100"
                        src={eoy_social_1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>End of Year Texas Blockchain Social</h3>
                        <p>1/2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img style={{
                        borderRadius: "10%",
                        height: "400px",
                        objectFit: "cover"
                    }}
                        className="d-block w-100"
                        src={eoy_social_2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>End of Year Texas Blockchain Social</h3>
                        <p>2/2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img style={{
                        borderRadius: "10%",
                        height: "400px",
                        objectFit: "cover"
                    }}
                        className="d-block w-100"
                        src={near_hackathon_1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>NEAR x Texas Blockchain Hackathon</h3>
                        <p>1/2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img style={{
                        borderRadius: "10%",
                        height: "400px",
                        objectFit: "cover"
                    }}
                        className="d-block w-100"
                        src={near_hackathon_2}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>NEAR x Texas Blockchain Hackathon</h3>
                        <p>2/2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img style={{
                        borderRadius: "10%",
                        height: "400px",
                        objectFit: "cover"
                    }}
                        className="d-block w-100"
                        src={pionex}
                        alt="Fifth slide"
                    />
                    <Carousel.Caption>
                        <h3>Pionex Trading Competition</h3>
                        <p>1/1</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default LanCarouselContainer;