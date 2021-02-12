import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div className='homepage-render'>
                Home stuff is here
                <NavLink exact className='tag' activeClassName='selected' to='/search'>Search</NavLink>
            </div>
        )
    }
}
