import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import Search from './components/Search';

class App extends Component {
  state = {
    createForm: false,
    foods,
    filteredFoods: foods
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
    console.log(food)
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
    </div>
    )
  }
}

export default App;
