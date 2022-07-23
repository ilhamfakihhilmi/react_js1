import React from 'react'
import { Col, Container, Row } from "react-bootstrap"

const Intro = () => {
    return (
        <div className='intro'>
            <Container className="text-white d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className='title'>
                            TONTON SEMUA FILM TERBARU
                        </div>
                        <div className='title'>
                            SEKARANG!
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro