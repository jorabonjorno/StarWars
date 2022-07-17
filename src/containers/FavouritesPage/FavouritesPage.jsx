import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import HeroList from "@components/HeroPage/HeroList";

import styles from './FavouritesPage.module.css';

const FavouritesPage = () => {
    const [hero,setHero] = useState([]);
    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(()=> {
        const arr = Object.entries(storeData)
        if(arr.length){
            const res = arr.map(el => {
                return {
                    id: el[0],
                    ...el[1]
                }
            })
            setHero(res)
        }
    },[])
    return (
        <>
            <h1 className="header__text">Favorites</h1>
            {hero.length ? <HeroList hero={hero} /> : <h2 className={styles.comment}>No Data</h2>}

        </>
    )
}

export default FavouritesPage;
