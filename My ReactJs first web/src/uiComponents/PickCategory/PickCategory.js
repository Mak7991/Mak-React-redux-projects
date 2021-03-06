import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import './PickCategory.scss';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

function PickCategory() {
    return (
        <section className="vehicle-options">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1>Pick Your <br/> Category</h1>
                    </Col>
                    <Col/>
                </Row>

                <Row>
                    <Col>
                        <Slider {...settings} className="vehicle-slider">
                            <div>
                                <div className="vehicle-slide">
                                    <Image className="vehicle-slide-image" src={require('../../assets/images/car.png')} draggable={false}/>
                                </div>
                            </div>
                            <div>
                                <div className="vehicle-slide">
                                    <Image className="vehicle-slide-image" src={require('../../assets/images/car-2.png')} draggable={false}/>
                                </div>
                            </div>
                            <div>
                                <div className="vehicle-slide">
                                    <Image className="vehicle-slide-image" src={require('../../assets/images/car.png')} draggable={false}/>
                                </div>
                            </div>
                            <div>
                                <div className="vehicle-slide">
                                    <Image className="vehicle-slide-image" src={require('../../assets/images/car-2.png')} draggable={false}/>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default PickCategory;