import React from 'react';
import ListItem from "../ListItem/ListItem";
import List from "../List/List";
import './Search.css'

function Search({titles, dayLink}) {
    const renderTitles = items => {
        return items.map((item, index) => {
            return (
                <ListItem key={index} className="title-item">
                    <a href={item.link}>{item.title}</a>
                </ListItem>
            );
        })
    };

    return (
        <div className="search">
            <img src='https://i.pinimg.com/originals/79/83/f8/7983f81c76094d60d8659ec807629b7c.jpg' alt="Логотип Яндекс"/>
            <div className="wrap">
                <List className="titles-list" items={titles}>
                    {renderTitles}
                </List>
                <form method="GET" className="search__form">
                    <input type="text" name="search" placeholder="Поиск..."/>
                </form>
                <div className="day-link">
                    Найдется всё, например
                    <a href={dayLink.link}>{dayLink.title}</a>
                </div>
            </div>
        </div>
    )
}

export default Search;