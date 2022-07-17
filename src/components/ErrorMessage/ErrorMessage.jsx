import UiVideo from '@ui/UiVideo';
import video from './video/han-solo.mp4';

import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                Asshole developer. <br />
                We cannot display data.<br />
                Come back when we fix everything
            </p>

            <UiVideo src={video} classes={styles.video} />
        </>
    )
}

export default ErrorMessage;
