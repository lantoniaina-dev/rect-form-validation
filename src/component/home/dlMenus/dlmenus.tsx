import React from 'react';
import './dlmenus.css';
function DlMenus({ step, title }: any) {
    return (
        <div className="dlmenus">
            <div className='dl'>
                Step: {step}
                <p>{title}</p>
            </div>
        </div>

    )
}

export default DlMenus;
