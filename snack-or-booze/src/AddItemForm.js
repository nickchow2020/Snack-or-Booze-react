import React,{useState} from 'react';
import { useHistory,Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./AddItemForm.css"
const AddItemForm = ({add})=>{

    const history = useHistory()

    const INITIAL_VALUE = {
        id:"",
        name:"",
        description:"",
        recipe:"",
        serve:""
    }

    const [data,setData] = useState(INITIAL_VALUE)

    const convertId = (name)=>{
        return name.replaceAll(" ","-")
    }

    const handleChange = (evt)=>{   
        const {name,value} = evt.target;

        setData(prevData => ({
            ...prevData,
            [name]:value,
        }))
    }

    const handleSubmit = ()=>{
        const snack = {
            ...data,
            id:convertId(data.name)
        }
        add(snack)
        setData(INITIAL_VALUE)
        history.push("/snacks")
    }

    return (
        <Form onSubmit={handleSubmit} className="onSubmitForm">
            <h1>Add New Snack</h1>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="enter item name" 
                value={data.name} 
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input 
                type="text" 
                name="description" 
                id="description" 
                placeholder="description" 
                value={data.description} 
                onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="recipe">Recipe</Label>
                <Input 
                type="text" 
                name="recipe" 
                id="recipe" 
                placeholder="recipe" 
                value={data.recipe} 
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="serve">Serve</Label>
                <Input 
                type="text" 
                name="serve" 
                id="serve" 
                placeholder="serve" 
                value={data.serve} 
                onChange={handleChange} />
            </FormGroup>
            <Button>Add New Item</Button>
            <Link to="/snacks"><Button className="btnBack">Go Back</Button></Link>
        </Form>
    )
}

export default AddItemForm