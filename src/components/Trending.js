import React from 'react'
import duneImage from "../assets/images/trending/dune.jpg"
import everything from "../assets/images/trending/everything.jpg"
import infinite from "../assets/images/trending/infinite.jpg"
import joker from "../assets/images/trending/joker.jpg"
import lightyear from "../assets/images/trending/lightyear.jpg"
import morbius from "../assets/images/trending/morbius.jpg"

import { Card, Col, Container, Row, Image } from "react-bootstrap"

const Trending = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image
                                src={duneImage}
                                alt="Dune image"
                            />
                            <div className='p-2 m-2 text-white'>
                                <Card.Title className='text-center'>Dune</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image
                                src={everything}
                                alt="Dune image"
                            />
                            <div className='p-2 m-2 text-white'>
                                <Card.Title className='text-center'>Dune</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image
                                src={infinite}
                                alt="Dune image"
                            />
                            <div className='p-2 m-2 text-white'>
                                <Card.Title className='text-center'>Dune</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image
                                src={joker}
                                alt="Dune image"
                            />
                            <div className='p-2 m-2 text-white'>
                                <Card.Title className='text-center'>Dune</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image
                                src={lightyear}
                                alt="Dune image"
                            />
                            <div className='p-2 m-2 text-white'>
                                <Card.Title className='text-center'>Dune</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image
                                src={morbius}
                                alt="Dune image"
                            />
                            <div className='p-2 m-2 text-white'>
                                <Card.Title className='text-center'>Dune</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending