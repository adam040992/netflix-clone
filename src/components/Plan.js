import React from 'react';
import './Plan.scss';

function Plan({ active, name, resolution }) {
    return (
        <div className="plan">
            <div className="plan__info">
                <h5>{name}</h5>
                <h6>{resolution}</h6>
            </div>
            <button className={`${active ? "plan__button--active" : "plan__button"}`}>
                Subscribe
            </button>
        </div>
    )
}

export default Plan
