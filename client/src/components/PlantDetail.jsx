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
    }, [id])


    return (
        <div id="plant-card">
            <Card style={{ width: '50rem' }} className="bg-dark text-white">
                <Card.Img src={plantDetails.image} alt="plant" />
                <Card.ImgOverlay>
                    <Card.Title>{plantDetails.name}</Card.Title>
                    <Card.Text>{plantDetails.description}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default PlantDetail