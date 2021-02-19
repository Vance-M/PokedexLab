import React, { Component } from 'react'
import request from 'superagent';
import PokeSpinner from './PokeSpinner';
import Name, { AscDesc, Dropdown, PerPage } from './sortBy';
import PokeList from './utils'


export default class SearchPage extends Component {
    state = {
        pokemon: [],
        query: '',
        sortBy: 'species_id',
        AscOrDesc: '',
        loading: false,
        currentPage: 1,
        perPage: 25,
        totalPokemon: 0,
    }

    componentDidMount = async () => {
        await this.getPokemon();
    }
    componentDidUpdate = async (prevProps, prevState) => {
        const oldPage = prevState.currentPage;
        const newPage = this.state.currentPage;

        if(oldPage !== newPage){
            await this.getPokemon();
        }

        const oldPerPage = prevState.perPage;
        const newPerPage = this.state.perPage;

        if(oldPerPage !== newPerPage){
            await this.getPokemon();
        }

    }

    getPokemon = async () => {
        this.setState({ loading: true});
        const pokedex = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=${this.state.perPage}&pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.AscOrDesc}`);
        this.setState({
            loading: false,
            pokemon: pokedex.body.results,
            totalPokemon: pokedex.body.count,
        })
    }
    // SideBar Handlers
    handleClick = async () => {
        await this.getPokemon();
        console.log(this.state);
    }
    handleInputChange = async (e) => {
      this.setState({
        query: e.target.value,
      });
    }
    handlePerPage = (e) => {
        this.setState({perPage: e.target.value})
    }
    handlePrev = async () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        });
        await this.getPokemon();
    }
    handleNext = async () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
        await this.getPokemon();
    }

    // Sorting Handlers
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
        const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage);
        return (
            <div className='search-render'>
                
                <aside className='sidebar'>
                    <Name
                    handleName={this.handleInputChange}
                    handleClick={this.handleClick}
                    />
                    <div>
                        <PerPage handlePerPage={this.handlePerPage}/>
                    </div>
                    <div>
                    <button onClick={this.handlePrev} disabled={this.state.currentPage === 1}>Previous Page</button>
                    <button onClick={this.handleNext} disabled={this.state.currentPage === lastPage}>Next Page</button>
                    </div>
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
