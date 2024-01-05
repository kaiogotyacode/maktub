import style from "./WhatsApp.module.css";
import { FaWhatsapp } from "react-icons/fa6"

function WhatsApp() {
  return (
    <>
      <div className={style.whatsAppContainer}>
        <div className={style.whatsAppLabel}>
            <p>Contato</p>
        </div>
        <FaWhatsapp className={style.whatsAppIcon} fill="green"/>
      </div>
    </>
  );
}

export default WhatsApp;
