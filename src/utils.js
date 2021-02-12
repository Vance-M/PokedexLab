
import React, { Component } from 'react'

class ImageItem extends Component {
    render() {
        return (
            <li className='pokemon' key={this.props.pokemonCard._id}>
                <p><img src={this.props.pokemonCard.url_image} alt = {this.props.pokemonCard.pokemon} className= 'poke-image'/></p>
                <p>Name:{this.props.pokemonCard.pokemon}</p>
                <p>Pokedex Number:<br></br>{this.props.pokemonCard.species_id}</p>
                <div>
                    <p>Attack:{this.props.pokemonCard.attack}</p>
                    <p>Defense:{this.props.pokemonCard.defense}</p>
                </div>
            </li>
        )
    }
}

export default class ImageList extends Component {
    render() {
        const pokemonCard = this.props.cards.map(pokemonCard => <ImageItem pokemonCard={pokemonCard} key={pokemonCard.pokebase} />)
        return (
            <ul className='search-results'>
                { pokemonCard }
            </ul> 
        )
    }
}