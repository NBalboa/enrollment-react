import React from 'react'

function Header({ title }) {
    return (
        <div className='header__container'>
            <div className='header__wrapper'>
                <h2 className='header__title'>{title}</h2>
            </div>
        </div>
    )
}

export default Header