import React from 'react';
import Constant from '../../Constant.js';
import Mineral from './Mineral.js';

const MineralList = (props) => {
    return (
        <div className='mineral-container'>
            {
                Constant.minerals.map((mineral, i) => {
                    return (
                        <Mineral key={`mineral_${i}`} mineral={mineral} />
                    );
                })
            }
        </div>
    );
};

export default MineralList;