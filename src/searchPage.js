import React, { Component } from 'react'
import ImageList from './utils'
import { pokedexs } from './assets/pokedata.js';

export default class SearchPage extends Component {
    state = {
        sortBy: '',
        name: ''
    }

    handleChange = (e) => {
        this.setState({
          sortBy: e.target.value
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
        // console.log(pokedexs);
        // const pokedexFiltered = pokedexs.filter((pokemon) => {
        //         if (!this.state.name) return true;
        //         if (pokedexs.pokemon.includes(this.state.name)) return true;
        //     return false;
        // })
        const pokedexFiltered = pokedexs.filter(pokeinfo => pokeinfo.pokebase.includes(this.state.name))
        // console.log(pokedexFiltered);
        // this.state.
        return (
            <div className='search-render'>
                
                <aside className='sidebar'>
                    <p>
                        <input onChange={this.handleInputChange}/>
                    </p>
                </aside>
                <section className='search-results'>
                    <div className='sort-by'>
                        Sort By:
                        <select onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="attack">Attack</option>
                            <option value="defense">Defense</option>
                        </select>
                        
                    </div>
                    <ImageList cards={ pokedexFiltered }/>
                </section>
            </div>
            )
    }
}
