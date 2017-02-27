import React from 'react'
import classNames from 'classnames/bind'
import * as styles from './Button.css'
const cx = classNames.bind( styles )

const Button = ({ children, primary, success, info, warning, danger, link, disabled, loading }) => {

    const className = cx( 'button', {
        basic: !( primary || success || info || warning || danger || link ),
        primary,
        success,
        info,
        warning,
        danger,
        link,
        loading,
        disabled
    })

    return (
        <button className={ className }>
            { children }
        </button>
    )
}

export default Button
