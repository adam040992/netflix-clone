import React from 'react';
import Plan from './Plan';
import './PlansScreen.scss';

function PlansScreen() {
    
    return (
        <div className="plansScreen">
            <Plan active="true" name="Premium" resolution="4K + HDR" />
            <Plan name="Basic" resolution="720p" />  
            <Plan name="Standard" resolution="1024p" />  
        </div>
    )
}

export default PlansScreen
