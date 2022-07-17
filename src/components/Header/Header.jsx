import { NavLink } from "react-router-dom";
import { useState, useEffect} from "react";
import Favorite from '@components/Favorite';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';

import imgSpaceStation from './img/space-station.svg';
import imgDroid from './img/droid.svg';
import imgLightsaber from './img/lightsaber.svg';
import styles from './Header.module.css';

const Header = () => {
    const isTheme = useTheme()
    const [icon, setIcon] = useState(imgSpaceStation);
    const [link, setLink] = useState('/hero');
    const handleMouseEnter = () => {
        setLink('/hero/?page=1')
    }
    const handleMouseLeave = () => {
        setLink('/hero')
    }

    useEffect(()=>{
        switch (isTheme.theme) {
            case THEME_LIGHT:setIcon(imgLightsaber);break
            case THEME_DARK: setIcon(imgSpaceStation); break;
            case THEME_NEUTRAL: setIcon(imgDroid); break;
            default: setIcon(imgSpaceStation);
        }
    },[isTheme])
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="Star Wars"/>
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to={link} onMouseDown={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hero</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/fail">Fail</NavLink></li>
            </ul>
            <Favorite />
        </div>
    )
}


export default Header;
