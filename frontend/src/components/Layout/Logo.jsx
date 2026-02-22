import React from 'react';

const Logo = ({ className = "h-10 md:h-12 w-auto", dark = false }) => {
    const textPrimary = dark ? "#ffffff" : "#1e3a5f";
    const textSecondary = dark ? "#94a3b8" : "#64748b";

    return (
        <svg viewBox="0 0 290 60" className={className} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b5fc0" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>
                {/* Subtle shadow filter */}
                <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#1e3a8a" floodOpacity="0.25" />
                </filter>
            </defs>

            {/* Blue gradient rounded square box with shadow */}
            <rect x="0" y="0" width="60" height="60" rx="12" ry="12"
                fill="url(#boxGrad)" filter="url(#shadow)" />

            {/* Subtle inner highlight at the top of the box */}
            <rect x="4" y="4" width="52" height="24" rx="8" ry="8"
                fill="white" fillOpacity="0.08" />

            {/* White bold "A" */}
            <text
                x="30" y="43"
                fill="#ffffff"
                fontSize="36" fontWeight="900"
                fontFamily="Georgia, 'Times New Roman', serif"
                textAnchor="middle"
                style={{ letterSpacing: '-1px' }}
            >A</text>

            {/* Divider line */}
            <line x1="76" y1="30" x2="76" y2="52" stroke={textSecondary} strokeWidth="1" strokeOpacity="0.4" />

            {/* "Aapthi Marketing" */}
            <text
                x="84" y="26"
                fill={textPrimary}
                fontSize="19" fontWeight="800"
                fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
                letterSpacing="0.4"
            >Aapthi Marketing</text>

            {/* "Solutions Pvt Ltd" */}
            <text
                x="85" y="44"
                fill={textSecondary}
                fontSize="11.5" fontWeight="500"
                fontFamily="'Helvetica Neue', Arial, sans-serif"
                letterSpacing="1.2"
            >SOLUTIONS PVT LTD</text>
        </svg>
    );
};

export default Logo;
