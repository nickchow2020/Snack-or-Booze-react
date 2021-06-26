import React from "react";
import { Link} from "react-router-dom";
import { usePathname } from "./Hooks";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({items}) {

  const path = usePathname()

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`${path}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
        <Link to="/snacks/add" className="addNewLink">Add New Snack</Link>
      </Card>
    </section>
  );
}

export default Menu;
