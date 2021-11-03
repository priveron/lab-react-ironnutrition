import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import Search from './components/Search';
import TodayFood from './components/TodayFood';

class App extends Component {
  state = {
    createForm: false,
    foods,
    filteredFoods: foods,
    todayFoods: []
  };

  showForm = () => {
    this.setState({
      createForm: true
    })
  }

  createFood = (food) => {
    this.setState({
      foods: [...foods, food],
      createForm: false
    })
  };

  updateFiltered = (search) => {
    const searchFoods = this.state.foods.filter((v) => v.name.includes(search))
    console.log(searchFoods)
    this.setState({
      filteredFoods: searchFoods
    })
  }

  addFood = (food) => {
    const clone = JSON.parse(JSON.stringify(this.state.todayFoods))
    const find = this.state.todayFoods.findIndex((v) => v.name === food.name)
    if (find !== -1)
      clone[find].quantity += food.quantity
    else
      clone.push(food);
    this.setState({
      todayFoods: clone
    })
  };


  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <Search foods={this.state.foods} handler={this.updateFiltered}/>
        <div className="NewFood">
          <button onClick={this.showForm}>Add New Food</button>
          {this.state.createForm && (<FoodForm handler={this.createFood}/>)}
        </div>
      {this.state.filteredFoods.map((v) => (
        <FoodBox key={v.name} clickHandler={this.addFood} {...v}/>
      ))}
      <TodayFood foods={this.state.todayFoods}/>
    </div>
    )
  }
}

export default App;
