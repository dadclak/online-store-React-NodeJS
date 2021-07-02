import React from 'react';
import { Container, Col, Row, Image, Card, Button } from 'react-bootstrap';
import star from '../assets/starInfo.png';

const DevicePage = () => {
    const device = { id: 1, name: '12 pro', price: 1100, rating: 4, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000' }
    const description = [
        {id: 1, title: 'RAM memory', description: '5GB'},
        {id: 2, title: 'Camera', description: '12MP'},
        {id: 3, title: 'Processor', description: 'A45'},
        {id: 4, title: 'Processor cores', description: '4'},
        {id: 5, title: 'Battery', description: '2300'},
    ]
    
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image src={device.image} width={300} height={300}/>
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
                {description.map((info, idx) =>
                    <Row key={info.id} style={{background: idx % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage;