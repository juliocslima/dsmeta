import axios from 'axios';
import { toast } from 'react-toastify';
import Icon from '../../assets/images/notification-icon.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type NotificationButtonProps = {
  saleId: number;
}

export function NotificationButton({ saleId } : NotificationButtonProps) {

  function handleSendNotification(id: number) {
    axios.get(`${BASE_URL}/api/v1/sales/${id}/notification`)
      .then(response => { 
        toast.success('Mensagem enviada com sucesso', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          });
       });
  }

  return(
    <div className="dsmeta-red-btn" onClick={() => handleSendNotification(saleId)}>
      <img src={Icon} alt="Notification button" />
    </div>
  );
}