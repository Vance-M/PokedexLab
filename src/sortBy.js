import React, { Component } from 'react'

export class Dropdown extends Component {
    render() {
        return (
            <div>
                <select onChange={ this.props.handleSort }>
                    <option value=""></option>
                    <option value="attack"> Attack</option>
                    <option value="defense"> Defense</option>
                    <option value="special_attack"> Special Attack</option>
                    <option value="special_defense"> Special Defense</option>
                    <option value="hp"> Health</option>
                    <option value="speed"> Speed</option>
                    <option value="species_id"> Id</option>
                </select>
                <p>
                <button onClick={this.props.handleClick}>Search</button>
                </p>
            </div>
        )
    }
}

export class AscDesc extends Component {
    render() {
        return (
            <div>
                <select onChange={ this.props.handleAscOrDesc }>
                    <option value=""></option>
                    <option value="desc"> High</option>
                    <option value="asc"> Low</option>
                </select>
            </div>
        )
    }
}


export default class Name extends Component {
    render() {
        return (
            <div>
                <p>
                    Name:
                    <input onChange={this.props.handleName}/>
                </p>
                <p>
                    <button onClick={this.props.handleClick}>Search</button>
                </p>
            </div>
        )
    }
}

export class PerPage extends Component {
    render() {
        return (
            <>
             <select onChange={this.props.handlePerPage}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
             </select>
            </>
        )
    }
}


