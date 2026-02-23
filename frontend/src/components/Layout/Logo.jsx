import React from 'react';

const Logo = ({ className = "h-10 md:h-12 w-auto" }) => {
    return (
        <svg viewBox="0 0 600 120" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Arrow/1 mark - Orange */}
            <path d="M 80 90 L 140 50 L 160 65 L 100 105" fill="#FF8A3D" />
            
            {/* Arrow/1 mark - Blue */}
            <path d="M 60 110 L 120 70 L 95 40 L 35 80" fill="#2B9FD9" />
            
            {/* AAPTHI text */}
            <text x="200" y="80" fontSize="56" fontWeight="900" fill="white" fontFamily="Arial, sans-serif">
                AAPTHI
            </text>
            
            {/* Small divider */}
            <line x1="200" y1="95" x2="420" y2="95" stroke="white" strokeWidth="1" opacity="0.3" />
            
            {/* MARKETING SOLUTIONS PVT LTD text */}
            <text x="200" y="112" fontSize="14" fontWeight="400" fill="white" fontFamily="Arial, sans-serif" letterSpacing="2">
                MARKETING SOLUTIONS PVT LTD
            </text>
        </svg>
    );
};

export default Logo;
