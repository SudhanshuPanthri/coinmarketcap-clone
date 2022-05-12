import React from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

const Rate = ({ isIncrement, rate }) => {
    return (
        <div style={styles.iconWrapper}>
            {isIncrement ? <FiChevronUp fill='#17C784' style={{ color: '#17C784' }} /> : <FiChevronDown fill='red' style={{ color: 'red' }} />}
            <span style={isIncrement ? styles.green : styles.red}> {rate}</span>
        </div>
    )
}

export default Rate

const styles = {
    iconWrapper: {
        display: 'inline-block',
    },

    green: {
        color: '#26b67f'
    },
    red: {
        color: 'red'
    }
}