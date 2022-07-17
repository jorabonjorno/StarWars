import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './HeroList.module.css';

const HeroList = ({hero}) => {
    return (
        <> <ul className={styles.list__container}>
            {hero.map(({ id, name, img }) =>
                <li className={styles.list__item} key={id}>
                    <Link to={`/hero/${id}`}>
                        <img className={styles.hero__photo} src={img} alt={name} />
                        <p>{name}</p>
                    </Link>

                </li>
            )}
        </ul></>
    )
}

HeroList.propTypes = {
    hero: PropTypes.array
}

export default HeroList;
