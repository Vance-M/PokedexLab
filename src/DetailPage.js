import React, { Component } from 'react'
import request from 'superagent';
import PokeSpinner from './PokeSpinner';

export default class DetailPage extends Component {
    state = {
        pokedexEntry: {}
    }

    componentDidMount = async () => {
        this.setState({loading: true});

        const pokedex = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);
        
        this.setState({
            loading: false,
            pokedexEntry: pokedex.body.results.find(item => item.pokemon === this.props.match.params.pokemonName),
        })
    }
    render() {
        console.log('=============================\n')
        console.log('|| this.state.pokemonData', this.state.pokedexEntry)
        console.log('\n=============================')
        return (
            <div className='pokedexEntry'>
               <h1>{this.state.pokedexEntry.pokemon}</h1>
               {
                this.state.loading
                    ? <PokeSpinner /> 
                    : <div>
                        <img src={this.state.pokedexEntry.url_image} alt="pokemon" />
                       <p>{this.state.pokedexEntry.pokemon}</p>
                       <p>{this.state.pokedexEntry.attack}</p>
                       <p>{this.state.pokedexEntry.defense}</p>
                       <p>{this.state.pokedexEntry.type_1}</p>
                       <p>{this.state.pokedexEntry.type_2}</p>
                       <p>{this.state.pokedexEntry.shape}</p>
                       <p>{this.state.pokedexEntry.ability_1}</p>
                       <p>{this.state.pokedexEntry.ability_2}</p>

                   </div>
               }
            </div>
        )
    }
}
