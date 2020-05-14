import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {age: props.age}
    }

    handleClick = () => {
        this.setState({age: this.state.age+1})
    }

    render () {
        return(
            <div style={{margin: "auto 500px"}}>
                <h1 style={{textAlign: "left"}}>{this.props.lastName}, {this.props.firstName}</h1>
                <p style={{textAlign: "left"}}>Age: {this.state.age}</p>
                <p style={{textAlign: "left"}}>Hair Color: {this.props.hairColor}</p>
                <button style={{display: "flex", justifyContent: "center"}} onClick={this.handleClick}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}

export default PersonCard;