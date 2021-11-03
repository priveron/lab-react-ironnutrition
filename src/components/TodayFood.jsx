import React, { Component } from 'react'

export default class TodayFood extends Component {
  render() {
    return (
      <div className="TodayFood">
        <h2>Today's foods</h2>
        <ul>
          {this.props.foods.map((v) => (
            <li key={v.name}>{v.quantity} {v.name} = {v.quantity * v.calories} cal</li>
          ))}
        </ul>
        <p>Total: {this.props.foods.reduce((ac, next) => ac + next.quantity * next.calories, 0)} cal</p>
      </div>
    )
  }
}
