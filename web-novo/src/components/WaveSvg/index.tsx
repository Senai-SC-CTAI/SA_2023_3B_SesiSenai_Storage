import React from 'react'
import './styles.css'

export const WaveSvg = () => (
    <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
    >
        <defs>
            <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
        </defs>
        <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#94d7ef"></use>
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#94d7ef"></use>
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#69a5d1"></use>
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#1b4a9b"></use>
        </g>
    </svg>
)