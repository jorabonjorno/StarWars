import {useState, useEffect} from "react";
import PropTypes from 'prop-types';

import loaderBlack from './img/loading-black.svg'
import loaderWhite from './img/loading-white.svg'
import loaderBlue from './img/loading-blue.svg'
import styles from './UiLoading.module.css';
import cn from 'classnames'

const UiLoading = ({theme='white', isShadow=true,classes}) => {
    const [loaderIcon,setLoadeIcon] = useState(null);
    useEffect(()=>{
        switch (theme) {
            case 'black': setLoadeIcon(loaderBlack); break;
            case 'white': setLoadeIcon(loaderWhite); break;
            case 'blue': setLoadeIcon(loaderBlue); break;
            default: setLoadeIcon(loaderBlack)
        }
    },[])
    return (
        <>
            <img
                className={cn(styles.loader, isShadow && styles.shadow, classes)}
                src={loaderIcon}
                alt='Loader'
            />
        </>
    )
}

UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string,
}

export default UiLoading;
