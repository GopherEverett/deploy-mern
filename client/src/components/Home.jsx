import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Home = () => {

    const [plants, setPlants] = useState()

    const fetchPlants = async () => {
        let res = await axios.get('http://localhost:3001/api/plants')
        setPlants(res.data.plants);
    }

    useEffect(() => {
        fetchPlants()
    }, [])

    return (
        <div  id="plant-cards">
            {plants?.map((plant) => (
                <div key={plant._id}>
                <Link to={`/${plant._id}`} className="nav-link">
                        <h3>{plant.name}</h3>
                </Link>
                </div>
            ))
            }
        </div >
    )
}

export default Home