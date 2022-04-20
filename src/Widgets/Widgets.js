import React from 'react';
import Widget from "../Widget/Widget";

function Widgets({items}) {
    const renderWidgetContent = item => {
        // отображение внутренности виджета в зависимости от типа и содержащихся данных
    };

    return (
        <div className="widgets-block">
            {items.map(item => {
                return (
                    <Widget title={item.title} item={item}>
                        {renderWidgetContent}
                    </Widget>
                );
            })}
        </div>
    );
}

export default Widgets;