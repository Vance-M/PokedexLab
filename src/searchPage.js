import React, { Component } from 'react'
import PokeList from './utils'
import { pokedexs } from './assets/pokedata.js';

export default class SearchPage extends Component {
    state = {
        sortByHigh: '',
        sortByLow: '',
        name: ''
    }

    handleHighChange = (e) => {
        this.setState({
          sortByHigh: e.target.value
        })
        this.setState({
            sortByLow: ''
          })
      }
      handleLowChange = (e) => {
        this.setState({
          sortByLow: e.target.value
        })
        this.setState({
            sortByHigh: ''
          })
      }
    
    handleInputChange = (e) => {
      this.setState({
        name: e.target.value,
      });
    }

    render() {
        console.log(this.state);
        console.log(this.state.name);
        console.log(this.state.sortBy);
        const pokedexFiltered = pokedexs.filter(pokeinfo => pokeinfo.pokebase.includes(this.state.name))

        pokedexFiltered.sort((a, b) => b[this.state.sortByHigh] - (a[this.state.sortByHigh]));
        pokedexFiltered.sort((a, b) => a[this.state.sortByLow] - (b[this.state.sortByLow]));
        return (
            <div className='search-render'>
                
                <aside className='sidebar'>
                    <p>
                        Name:
                        <input onChange={this.handleInputChange}/>
                    </p>
                </aside>
                <section className='search-results'>
                    <div className='sort-by'>
                    <div className='sort-by'>
                        Sort By High:
                        <select onChange={this.handleHighChange}>
                            <option value=""></option>
                            <option value="attack">Highest Attack</option>
                            <option value="defense">Highest Defense</option>
                            <option value="special_attack">Highest Special Attack</option>
                            <option value="special_defense">Highest Special Defense</option>
                            <option value="hp">Highest Health</option>
                            <option value="speed">Highest Speed</option>
                        </select>
                        </div>
                        <div className='sort-by'>
                        Sort By Low:
                        <select onChange={this.handleLowChange}>
                            <option value=""></option>
                            <option value="attack">Highest Attack</option>
                            <option value="defense">Highest Defense</option>
                            <option value="special_attack">Highest Special Attack</option>
                            <option value="special_defense">Highest Special Defense</option>
                            <option value="hp">Highest Health</option>
                            <option value="speed">Highest Speed</option>
                        </select>
                        </div>
                    </div>
                    <PokeList cards={ pokedexFiltered }/>
                </section>
            </div>
            )
    }
}
