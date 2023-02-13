import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {Button, Form } from 'react-bootstrap'


const NewPlant = () => {
    const navigate = useNavigate()

    const intialValues = {
        name: "",
        description: "",
        image: ""
    }

    const [formValues, setFormValues] = useState(intialValues)

    const submitForm = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001/api/plants', formValues)
        navigate('/')
    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value })
    }

    return (
        <div>
            <Form onSubmit={submitForm} id="add-form">
                <Form.Label htmlFor="name">NAME</Form.Label>
                <Form.Control type="text" id="name" value={formValues.name} onChange={handleChange} />
                <br />
                <Form.Label htmlFor="description">DESCRIPTION</Form.Label>
                <Form.Control type="text" id="description" value={formValues.description} onChange={handleChange} />
                <br />
                <Form.Label htmlFor="image">IMAGE URL</Form.Label>
                <Form.Control type="text" id="image" value={formValues.image} onChange={handleChange} />
                <br />
                <Button variant="primary" type='submit'>SUBMIT</Button>
            </Form>
        </div>
    )
}

export default NewPlant