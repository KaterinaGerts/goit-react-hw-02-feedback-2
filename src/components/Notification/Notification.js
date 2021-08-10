import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default function Notification({message}) {
    return <p className={s.message}>{message}</p>    
}

Notification.propType = {
    message: PropTypes.string.isRequired,
}