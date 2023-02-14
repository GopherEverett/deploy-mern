import { useLocation } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const PlantDetail = () => {

    const location = useLocation()

    let {plant} = location.state

    return (
        <div id="plant-card">
            <Card style={{ width: '50rem'}} className="bg-dark text-white" border="success">
                <Card.Img src={plant.image} style={{ maxHeight: '70vh'}} alt="plant" />
                <Card.ImgOverlay>
                    <Card.Title style={{ fontSize: '3rem' }}>{plant.name}</Card.Title>
                </Card.ImgOverlay>
                <Card.Text className='mt-auto' style={{ fontSize: '1.7rem' }}>{plant.description}</Card.Text>
            </Card>
        </div>
    )
}

export default PlantDetail