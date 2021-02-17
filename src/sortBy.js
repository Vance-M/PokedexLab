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

