import React from "react";
import ListItem from "./ListItem";


const Burgermenue = () => {

    const navItems = [
        {key: 'link-main', link : '#', image : 'главная.png', text : 'Главная'},
        {key: 'link-learn',link : 'learn', image : 'учить слова.png', text : 'Учим слова'},
        {key: 'link-games',link : 'games', image : 'игра1.png', text : 'Игры'},
        {key: 'link-vocabulary',link : 'vocabulary', image : 'словарь.png', text : 'Словарь'},
        {key: 'link-settings',link : 'settings', image : 'настройки.png', text : 'Настройки'},
        {key: 'link-statistics',link : 'statistics', image : 'статистика.png', text : 'Статистика'},
        {key: 'link-about',link : 'about', image : 'команда.png', text : 'О нас'},
        {key: 'link-promopage',link : 'promopage', image : 'промо.png', text : 'Промо'}
    ]

    return(
        <div className="burgermenue hidden" id="burgermenue">
            <nav className="burgermenue__navigation">
                <ul className="navigation__nav">
                    {navItems.map((item) => {return <ListItem item={item} key = {item.key} />})}
                </ul>
            </nav>
        </div>
    );
};

export default Burgermenue;