import React from 'react';

function ListItem({className, children}) {
    return (
        <li className={className}>{children}</li>
    );
}

export default ListItem;