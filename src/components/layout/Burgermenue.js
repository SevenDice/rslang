import React from "react";
import ListItem from "./ListItem";


const Burgermenue = () => {

    const navItems = [
        {key: 'link-main', link : '#', image : 'main.png', text : 'Главная'},
        {key: 'link-learn',link : 'learn', image : 'learn.png', text : 'Учим слова'},
        {key: 'link-games',link : 'games', image : 'games1.png', text : 'Игры'},
        {key: 'link-vocabulary',link : 'vocabulary', image : 'vocabulary.png', text : 'Словарь'},
        {key: 'link-settings',link : 'settings', image : 'settings.png', text : 'Настройки'},
        {key: 'link-statistics',link : 'statistics', image : 'statistics.png', text : 'Статистика'},
        {key: 'link-about',link : 'about', image : 'about.png', text : 'О нас'},
        {key: 'link-promopage',link : 'promopage', image : 'promopage.png', text : 'Промо'}
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