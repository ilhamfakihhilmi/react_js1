import React from 'react'
import { Col, Container, Row, Button } from "react-bootstrap"

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
                        <div className='introButton mt-4 text-center'>
                            <Button variant='dark'>Daftar Sekarang</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro