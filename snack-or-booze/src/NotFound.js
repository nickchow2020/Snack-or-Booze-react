import React from "react"
import { Link } from "react-router-dom"
import "./NotFound.css"
import { Button } from 'reactstrap';
const NotFound = ()=>{
    return(
        <div className="notfoundWrap">
            <div className="NotFoundTop"></div>
            <h1 className="message">Sorry,Page not found</h1>
            <div className="NotFoundBot"></div>
            <Link to="/"><Button color="warning">Go Back Home</Button></Link>
        </div>
    )
}

export default NotFound;