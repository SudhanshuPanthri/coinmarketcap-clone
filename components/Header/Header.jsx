import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='parent'>
            <Image src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg' className='header_img' height={150} width={150} alt='logo' />
            <div className="navWrapper">
                <div className="navItems">
                    <span className='link'>Cryptocurrencies</span>
                    <div className='badge'></div>
                </div>
                <div className="navItems">
                    <span className='link'>Exchanges</span>
                </div>
                <div className="navItems">
                    <span className='link'>NFT</span>
                    <div className='badge'></div>
                </div>
                <div className="navItems">
                    <span className='link'>Cryptown</span>
                    <div className='badge'></div>
                </div>
                <div className="navItems">
                    <span className='link'>Portfolio</span>
                </div>
                <div className="navItems">
                    <span className='link'>Watchlist</span>
                </div>
                <div className="navItems">
                    <span className='link'>Products</span>
                    <div className='badge'></div>
                </div>
                <div className="navItems">
                    <span className='link'>Learn</span>
                </div>
            </div>
            <div className='rightNavContainer'>
                <button className='btn'>Connect Wallet</button>
                <div className='inputContainer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" className='input' placeholder='Search' />
                </div>
            </div>
        </div>
    )
}

export default Header