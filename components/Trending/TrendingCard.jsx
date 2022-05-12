import React from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import Item from './Item'
import TrendingIcon from '../../assets/TrendingIcon.png'
import { IoIosArrowForward } from 'react-icons/io'

const TrendingCard = ({ trendingData, heading }) => {
    return (
        <div className='trendingCard'>
            <div className='trendingCardHeading'>
                <div>
                    <span><FiTrendingUp className='icon-tr' style={{ color: 'whitesmoke' }} /></span>
                    <p style={{ color: 'whitesmoke', fontSize: '20px', fontWeight: '500', margin: '0px 10px' }}>{heading}</p>
                </div>
                <div className='linkWrapper'>
                    <a href='#' style={{
                        color: '#5d7de7',
                        textDecoration: 'none'
                    }}>More <IoIosArrowForward /></a>
                </div>
            </div>
            <div className='itemWrapper'>
                {/* <Item trendingData={trendingData} /> */}
                {/* {console.log(trendingData)} */}
                {trendingData.map((item) => (
                    <Item trendingData={item} />
                ))}
            </div>
        </div>
    )
}

export default TrendingCard