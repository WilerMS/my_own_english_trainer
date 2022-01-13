import React from 'react'

const Icon = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
            <title>Apps</title>
            <rect x="64" y="64" width="80" height="80" rx="40" ry="40" fill={color} stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
            <rect x="216" y="64" width="80" height="80" rx="40" ry="40" fill={color} stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
            <rect x="368" y="64" width="80" height="80" rx="40" ry="40" fill={color} stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
            <rect x="64" y="216" width="80" height="80" rx="40" ry="40" fill={color} stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
            <rect x="216" y="216" width="80" height="80" rx="40" ry="40" fill={color} stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
            <rect x="368" y="216" width="80" height="80" rx="40" ry="40" fill={color} stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
            <rect x="64" y="368" width="80" height="80" rx="40" ry="40" fill={color} stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
            <rect x="216" y="368" width="80" height="80" rx="40" ry="40" fill={color} stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
            <rect x="368" y="368" width="80" height="80" rx="40" ry="40" fill={color} stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
        </svg>
    )
}

export default Icon;