import { useNavigate } from "react-router";
import iconBack from './img/back.svg'
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const navigate = useNavigate()
    const handleGoBack = (event) => {
        event.preventDefault()
        navigate(-1)
    }
    return (
        <a
            href='#'
            onClick={handleGoBack}
            className={styles.link}
        >
            <img src={iconBack} className={styles.link__img} alt='Go Back'/>
            <span>Go Back</span>
        </a>
    )
}


export default PersonLinkBack;
