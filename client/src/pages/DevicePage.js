import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Image, Card, Button } from 'react-bootstrap';
import star from '../assets/starInfo.png';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const { id } = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image src={process.env.REACT_APP_API_URL + device.img} width={300} height={300}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{background: `url(${star}) no-repeat center center`, width: 240, height:240, backgroundSize: 'cover', fontSize: 65}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>${device.price}</h3>
                        <Button variant={"outline-dark"}>Add to cart</Button>
                    </Card>
                <Col md={4}>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Specifications</h1>
                {device.info.map((info, idx) =>
                    <Row key={info.id} style={{background: idx % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage;