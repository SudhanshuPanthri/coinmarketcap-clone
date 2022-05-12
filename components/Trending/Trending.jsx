import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
import Rate from '../cmc-table/Rate';
import TrendingCard from './TrendingCard';

const TrendingData = [
    {
        number: 1,
        symbol: 'BTC',
        name: 'Bitcoin',
        isIncrement: true,
        rate: '2.34%'
    },
    {
        number: 2,
        symbol: 'ETH',
        name: 'Ethereum',
        isIncrement: true,
        rate: '4.34%'
    },
    {
        number: 3,
        symbol: 'USDT',
        name: 'Tether',
        isIncrement: false,
        rate: '1.34%'
    },
]

const Trending = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div className='trendingParent'>
            <div className='trendingHeading'>
                <div className='leftdiv'>
                    <p style={{ color: 'white', fontSize: '24px', fontWeight: '500' }}>Today's Cryptocurrency Prices by Market Cap</p>
                    <p style={{ color: 'white' }}>The global crypto market cap is ₹114.69T, a <span><Rate isIncrement={true} rate='0.69%' /></span> decrease over the last day.&nbsp;
                        <span className='underline'>Read more</span></p>
                </div>
                <div className='rightdiv'>
                    <span style={{
                        marginRight: '24px',
                        color: 'whitesmoke'
                    }}>Highlights</span>
                    <ReactSwitch checked={checked} onChange={() => setChecked(!checked)} />
                </div>
            </div>
            <div className='trendingWrapper'>
                <TrendingCard heading='Trending' trendingData={TrendingData} />
                <TrendingCard heading='Biggest Gainers' trendingData={TrendingData} />
                <TrendingCard heading='Recently Added' trendingData={TrendingData} />
            </div>
        </div>
    )
}

export default Trending