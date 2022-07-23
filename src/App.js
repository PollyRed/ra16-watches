import './App.css';
import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import AddWatchesForm from './components/AddWatchesForm';
import WatchesList from './components/WatchesList';

class App extends Component {
  state = {
      data: [
          {name: 'London', timezone: '3', id: nanoid()}
      ]
  }

  addItem = (body) => {

      const newItem = {
          name: body.name,
          timezone: body.timezone,
          id: nanoid()
      }

      this.setState(({data})=> {
          const newArr = [...data, newItem];
          return {
              data: newArr
          }
      })
  }

  deleteItem = (id) => {
      this.setState(({data}) => {

          const index = data.findIndex(elem => elem.id === id);
          const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

          return {
              data: newArr
          }
      })
  }

  render() {
      return (
          <div className="App">
              <AddWatchesForm onAdd={this.addItem}/>
              <WatchesList watches={this.state.data} onDelete={this.deleteItem}/>
          </div>
      )
  }
}

export default App;
