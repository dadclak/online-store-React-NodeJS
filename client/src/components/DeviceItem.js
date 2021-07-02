import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png'
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image src={device.img} height={150} width={150}/>
                <div className="mt-2 d-flex justify-content-between align-items-center">
                    <div className="text-black-50">Apple...</div>
                    <div className="d-flex align-items-center">
                        <div className="mr-1">{device.rating}</div>
                        <Image src={star} height={20} width={20}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
};

export default DeviceItem;