import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class ApartmentEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
          form:{
            street: this.props.apartment.street,
            city: this.props.apartment.city,
            state: this.props.apartment.state,
            manager: this.props.apartment.manager,
            email: this.props.apartment.email,
            price: this.props.apartment.price,
            bedrooms: this.props.apartment.bedrooms,
            bathrooms: this.props.apartment.bathrooms,
            pets: this.props.apartment.pets
          },
          submitted: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }
    handleSubmit = () => {
        this.props.updateListing(this.state.form, this.props.apartment.id)
        this.setState({ submitted: true })
    }
    render() {
        console.log(this.props.apartment.id)
        const { street, city, state, manager, email, price, bedrooms, bathrooms, pets} = this.state.form
        return (
            <div>
                <h3>Update your Listing</h3>
                <div className='apt-new-body'>
                    <Form> 
                        <FormGroup>
                            <Label for='street'>Street</Label>
                            <Input
                                type='text'
                                name='street'
                                onChange={ this.handleChange }
                                value={ street }
                            />
                        </FormGroup>    
                        <br />
                        <FormGroup>
                            <Label for='city'>City</Label>
                            <Input
                                type='text'
                                name='city'
                                onChange={ this.handleChange }
                                value={ city }
                            />
                        </FormGroup> 
                        <br />
                        <FormGroup>
                            <Label for='state'>State</Label>
                            <Input
                                type='state'
                                name='state'
                                onChange={ this.handleChange }
                                value={ state }
                            />
                        </FormGroup>  
                        <br />    
                        <FormGroup>
                            <Label for='manager'>Manager</Label>
                            <Input
                                type='manager'
                                name='manager'
                                onChange={ this.handleChange }
                                value={ manager }
                            />
                        </FormGroup>   
                        <br />  
                        <FormGroup>
                            <Label for='email'>Email</Label>
                            <Input
                                type='email'
                                name='email'
                                onChange={ this.handleChange }
                                value={ email }
                            />
                        </FormGroup> 
                        <br />
                        <FormGroup>
                            <Label for='price'>Price</Label>
                            <Input
                                type='price'
                                name='price'
                                onChange={ this.handleChange }
                                value={ price }
                            />
                        </FormGroup> 
                        <br />
                        <FormGroup>
                            <Label for='bedrooms'>Bedrooms</Label>
                            <Input
                                type='bedrooms'
                                name='bedrooms'
                                onChange={ this.handleChange }
                                value={ bedrooms }
                            />
                        </FormGroup> 
                        <br />
                        <FormGroup>
                            <Label for='bathrooms'>Bathrooms</Label>
                            <Input
                                type='bathrooms'
                                name='bathrooms'
                                onChange={ this.handleChange }
                                value={ bathrooms }
                            />
                        </FormGroup> 
                        <br />
                        <FormGroup>
                            <Label for='pets'>Pets</Label>
                            <Input
                                type='pets'
                                name='pets'
                                onChange={ this.handleChange }
                                value={ pets }
                            />
                        </FormGroup> 
                        <br />
                        <Button onClick={ this.handleSubmit }>Submit</Button>
                    </Form>
                    { this.state.submitted && <Redirect to='/apartmentindex'/>}
                </div>
            </div>
        );
    }
}

export default ApartmentEdit;