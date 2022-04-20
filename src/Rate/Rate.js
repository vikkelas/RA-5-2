import React from 'react';
import PropTypes from 'prop-types';
import './Rate.css'
import ListItem from "../ListItem/ListItem";
import List from "../List/List";



function Rate({items}) {
    const renderRates = items=>{
        return items.map(item=>{
            const {id, link, title, cur, diff} = item;
            return (
                <ListItem key={id} className="rate-item">
                    <a href={link}>{title}</a>
                    <div>{cur}</div>
                    <div>{diff}</div>
                </ListItem>
            )
        })
    }
    return (
        <div className='rate'>
            <List className='rate-list' items={items}>
                {renderRates}
            </List>
        </div>
    );
}

Rate.propTypes = {
items: PropTypes.array.isRequired
};
export default Rate;