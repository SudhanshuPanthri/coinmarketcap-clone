import React from 'react'
import Rate from '../cmc-table/Rate'

const Item = ({ trendingData }) => {
    return (
        <div className='itemParent'>
            <div className='itemLeft'>
                <span style={styles.span}>{trendingData.number}</span>
                {/* icon  */}
                <span style={styles.coinSymbol}>{trendingData.symbol}</span>
                {/* <img src={img} alt={name} /> */}
            </div>
            <div className='itemRight'>
                <Rate isIncrement={true} rate="6.69%" />
            </div>
        </div>
    )
}

export default Item

const styles = {
    span: {
        color: 'whitesmoke',
        fontSize: '12px',
        margin: '0 10px'
    },
    coinSymbol: {
        color: 'whitesmoke',
        fontSize: '14px',
        fontWeight: '500'
    }
}