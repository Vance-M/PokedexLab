
import React, { Component } from 'react'

class PokeItem extends Component {
    render() {
        return (
            <li className='pokemon' key={this.props.pokemonCard._id}>
                <p><img src={this.props.pokemonCard.url_image} alt = {this.props.pokemonCard.pokemon} className= 'poke-image'/></p>
                <p>Name:{this.props.pokemonCard.pokemon}</p>
                <p>Pokedex Number:<br></br>{this.props.pokemonCard.species_id}</p>
                <div className='stats'>
                    <p>Att:{this.props.pokemonCard.attack}</p>
                    <p>Def:{this.props.pokemonCard.defense}</p>
                    <p>SpAtt:{this.props.pokemonCard.special_attack}</p>
                    <p>SpDef:{this.props.pokemonCard.special_defense}</p>
                    <p>Hp:{this.props.pokemonCard.hp}</p>
                    <p>Spd:{this.props.pokemonCard.speed}</p>
                </div>
            </li>
        )
    }
}

export default class PokeList extends Component {
    render() {
        const pokemonCard = this.props.cards.map(pokemonCard => <PokeItem pokemonCard={pokemonCard} key={pokemonCard._id} />)
        return (
            <ul className='search-results'>
                { pokemonCard }
            </ul> 
        )
    }
}