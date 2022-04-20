import React, {useState} from 'react';
import PropTypes from 'prop-types';
import List from "../List/List";

import './News.css'

//компонент отриосвки блока с новостями
function News({listTitle, listNews}) {
    const [activeTitle, setActiveTitle] = useState(listTitle[0]);
    const handleChangeTitle = title=>{setActiveTitle(title)};

    const renderTitle = items=>{
        return items.map((item,index) => {
            const isActive = item===activeTitle && 'active';
            return(
                    <li key={index} className={`news-title ${isActive}`} onClick={()=>handleChangeTitle(item)}>{item}</li>
                )
        })
    }

    const renderNews = items =>{
       return items
            .filter(item=>item.titleList.includes(activeTitle))
            .map(item=>{
                const {link,img,description,text, id} = item;
                return(
                    <li className='news-item' key={id}>
                        <a className='news-item__link' href={link}>
                            <img src={img} alt={description}/>
                            <div>{text}</div>
                        </a>
                    </li>
                    )
            })
    }
    return (
        <div className='news'>
            <List className='listTitle' items={listTitle}>
                {renderTitle}
            </List>
            <List className='listNews' items={listNews}>
                {renderNews}
            </List>
        </div>
    );
}

News.propTypes = {
    listNews: PropTypes.array.isRequired,
    listTitle: PropTypes.array.isRequired
};

export default News;