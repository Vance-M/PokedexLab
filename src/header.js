import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                
                <header className='anchor-tags'>
                    <h1>POKEDEX</h1>
                    <NavLink exact className='tag' activeClassName='selected' to='/'>Home</NavLink>
                    <NavLink exact className='tag' activeClassName='selected' to='/search'>Search</NavLink>
                    <a href='https://www.serebii.net/' className='tag'>Serebii</a>
                </header>
            </div>
        )
    }
}
