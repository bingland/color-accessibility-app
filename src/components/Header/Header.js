import React from 'react'
import './Header.scss'

const Header = (props) => {
    return (
        <div className="Header">
            <svg width="111" height="101" viewBox="0 0 111 101">
            <defs>
                <filter id="Polygon_1" x="0" y="0" width="111" height="101" filterUnits="userSpaceOnUse">
                <feOffset dx="6" dy="6" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="6" result="blur"/>
                <feFlood floodOpacity="0.071"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
                </filter>
            </defs>
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Polygon_1)">
                <path id="Polygon_1-2" data-name="Polygon 1" d="M28.838,15.014a10,10,0,0,1,17.324,0L66.348,50a10,10,0,0,1-8.662,15H17.314A10,10,0,0,1,8.652,50Z" transform="translate(12 12)" fill="#fff"/>
            </g>
            </svg>

            <h1 style={{color: "#fff"}}>Prism</h1>
        </div>
    )
}

export default Header
