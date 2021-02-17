import React, { Component } from 'react'
import request from 'superagent';
import PokeSpinner from './PokeSpinner';
import Name, { AscDesc, Dropdown } from './sortBy';
import PokeList from './utils'


export default class SearchPage extends Component {
    state = {
        pokemon: [],
        query: '',
        sortBy: '',
        AscOrDesc: '',
        loading: false,
    }

    componentDidMount = async () => {
        await this.getPokemon();
    }

    getPokemon = async () => {
        this.setState({ loading: true});
        const pokedex = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=24&pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.AscOrDesc}`);
        this.setState({
            loading: false,
            pokemon: pokedex.body.results,
        })
    }
    handleClick = async () => {
        await this.getPokemon();
    }
    handleInputChange = async (e) => {
      this.setState({
        query: e.target.value,
      });
    }
    handleSort = (e) => {
        this.setState({
            sortBy: e.target.value,
        })
    }
    handleAscOrDesc = (e) => {
        this.setState({
            AscOrDesc: e.target.value,
        })
    }
    render() {
        console.log(this.state);
        console.log(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.AscOrDesc}`);

        return (
            <div className='search-render'>
                
                <aside className='sidebar'>
                    <Name
                    handleName={this.handleInputChange}
                    handleClick={this.handleClick}
                    />
                </aside>
                <section className=''>
                    <div className='sort-by'>
                        Ascending or Descending:
                        <AscDesc 
                        handleAscOrDesc={this.handleAscOrDesc}
                        />
                        Sort By Stats:
                        <Dropdown
                        handleSort={this.handleSort}
                        handleClick={this.handleClick}
                        />
                    </div>
                    {
                    this.state.loading
                    ? <PokeSpinner />
                    : <PokeList cards={ this.state.pokemon }/>
                    }
                </section>
            </div>
            )
    }
}
