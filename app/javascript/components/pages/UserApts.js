import React, { Component } from 'react';
import { Card, Button, CardTitle, Row, Col, Collapse, CardBody, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class UserApts extends Component {
    render() {
        //let { apartment } = this.props
        console.log()
        return (
            <div>
                <h3>My Listings</h3>
                <div className="index-cards">
                    {this.props.apartments && this.props.apartments.map(apartment => {
                        return (
                            <Row key={apartment.id}>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle tag="h5">Apartment #{apartment.id}</CardTitle>
                                        <CardText>Address: {apartment.street} {apartment.city}, {apartment.state}</CardText>
                                        <CardText>Beds: {apartment.bedrooms}, 
                                                  Baths: {apartment.bathrooms}
                                        </CardText>
                                        <NavLink to={`/apartmentshow/${apartment.id}`}>
                                            <Button>More Info</Button>
                                        </NavLink>
                                    </Card>
                                </Col>
                            </Row>
                        )})}
                </div>
            </div>
        );
    }
}

export default UserApts;