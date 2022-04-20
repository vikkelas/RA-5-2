import React from 'react';

function List({className, items, children}) {
    return (
        <ul className={className}>
            {children(items)}
        </ul>
    );
}

export default List;