import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const PlantDetail = () => {

    let { id } = useParams()

    const [plantDetails, setPlantDetails] = useState({})

    const fetchDetails = async () => {
        let res = await axios.get(`http://localhost:3001/api/plants/${id}`)
        setPlantDetails(res.data.plant);
    }

    useEffect(() => {
        fetchDetails()
        // eslint-disable-next-line
    }, [id])


    return (
        <div id="plant-card">
            <Card style={{ width: '50rem' }} className="bg-dark text-white" border="success">
                <Card.Img src={plantDetails.image} alt="plant" />
                <Card.ImgOverlay>
                    <Card.Title style={{ fontSize: '3rem' }}>{plantDetails.name}</Card.Title>
                </Card.ImgOverlay>
                <Card.Text className='mt-auto' style={{ fontSize: '1.7rem' }}>{plantDetails.description}</Card.Text>
            </Card>
        </div>
    )
}

export default PlantDetail