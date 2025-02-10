import React from 'react';
import '../../src/css/custom.css'; // 确保引入自定义 CSS

export const Hb = ({ children }) => (
    <span className="highlight highlight-hb">
        {children}
    </span>
);

export const Hr = ({ children }) => (
    <span className="highlight highlight-hr">
        {children}
    </span>
);

export const Hg = ({ children }) => (
    <span className="highlight highlight-hg">
        {children}
    </span>
);

export const Hp = ({ children }) => (
    <span className="highlight highlight-hp">
        {children}
    </span>
);