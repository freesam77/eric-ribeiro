import React from 'react';
import './ServiceCard.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';

class ServiceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {
        name: this.props.services.name,
        description: this.props.services.description,
        duration: this.props.services.duration,
        price: this.props.services.price,
        _id: this.props.services._id
      }
    };
  }

  // check to see that props match service item
  handleClick = () => {
    console.log(this.state.service);
  }

  render() {
    return (
      <Col sm="4">
        <Card>
          <CardBody>
            <CardImg top width="100%" src={this.state.service.image} alt="Card image cap" />
            <CardTitle>{this.state.service.name}</CardTitle>
            <CardSubtitle>Duration: {this.state.service.duration} hours | Price: ${this.state.service.price}</CardSubtitle>
            <CardText>{this.state.service.description}</CardText>
            <Button href="/booking" onClick={this.handleClick}>Book Now</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default ServiceCard;