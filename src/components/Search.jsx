import React, { Component } from 'react'

export default class Search extends Component {
  state = {
    search: ""
  };

  changeHandler = (evt) => {
    this.setState({
      search: evt.target.value,
    }, () => {
      this.props.handler(this.state.search)
    });
  };
  render() {
    return (
      <input type="text" className="input" onChange={this.changeHandler}>
        
      </input>
    )
  }
}
