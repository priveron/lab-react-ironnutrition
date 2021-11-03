import React, { Component } from 'react'

export default class FoodForm extends Component {
  state = {
    name: "",
    calories: 0,
    image: ""
  };

  submitHandler = (evt) => {
    evt.preventDefault();
    this.props.handler(this.state);
  };

  changeHandler = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value,
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <label htmlFor="name" className="label">Food Name:</label>
        <input type="text"
        className="input"
        name="name"
        id="name"
        onChange={this.changeHandler}/>
        <label htmlFor="calories" className="label">Calories:</label>
        <input type="number"
        className="input"
        name="calories"
        id="calories"
        onChange={this.changeHandler}/>
        <label htmlFor="image" className="label">Food Image:</label>
        <input type="text"
        className="input"
        name="image"
        id="image"
        onChange={this.changeHandler}/>
        <button className="button">Submit</button>
      </form>
    )
  }
}
