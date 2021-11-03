import React, { Component } from 'react';

export default class FoodBox extends Component {
  state = {
    image: this.props.image || '',
    name: this.props.name || '',
    calories: this.props.calories || 0,
    quantity: 1,
  };

  changeHandler = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value,
    });
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.state.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.state.name}</strong> <br />
                <small>{this.state.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" id="quantity" value={this.state.quantity} onChange={this.changeHandler}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => this.props.clickHandler(this.state)}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
