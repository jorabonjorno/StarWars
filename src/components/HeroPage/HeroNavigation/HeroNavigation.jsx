import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import UiButton from "@ui/UiButton";

import styles from './HeroNavigation.module.css';

const HeroNavigation = ({getResponse, prevPage, nextPage, counterPage}) => {
    const handleChangeNext = () => getResponse(nextPage)
    const handleChangePrev = () => getResponse(prevPage)

    return (
        <div className={styles.container}>
            <Link to={`/hero/?page=${counterPage-1}`} className={styles.buttons}>
                <UiButton
                text="Previous"
                onClick={handleChangePrev}
                disabled={!prevPage}
                />
            </Link>
            <Link to={`/hero/?page=${counterPage+1}`} className={styles.buttons}>
                <UiButton
                    text='Next'
                    onClick={handleChangeNext}
                    disabled={!nextPage}

                />
            </Link>
        </div>
    )
}

HeroNavigation.propTypes = {
    getResourse: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
}

export default HeroNavigation;
