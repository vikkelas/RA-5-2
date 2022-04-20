import React from 'react';

function Widget({title, item, children}) {
    return (
        <div className="widget">
            <div>{title}</div>
            {children(item)}
        </div>
    );
}

export default Widget;