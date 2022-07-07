import React from "react";
import waicon from "../../public/img/whatsapp-icon.png";
import QueueAnim from "rc-queue-anim";

class WhatsAppButton extends React.PureComponent {
  render() {
    return (
      <QueueAnim className="whatsapp-icon" key="whatsapp-icon">
        <a href="https://wa.me/541132804326?text=Hola%20me%20interesaría%20adquirir%20el%20servicio.%20">
          <div className="whatsapp-icon">
            <img width="40" height="40" src={waicon} />
          </div>
        </a>
      </QueueAnim>
    );
  }
}
export default WhatsAppButton;
