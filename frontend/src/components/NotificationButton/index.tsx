import Icon from '../../assets/images/notification-icon.svg';

import './styles.css';

export function NotificationButton() {
  return(
    <div className="dsmeta-red-btn">
      <img src={Icon} alt="Notification button" />
    </div>
  );
}