import React from "react";
import Whatsapp from "../../public/img/whatsapp.svg";
import { BackTop } from "antd";

class WhatsAppButton extends React.PureComponent {
  render() {
    // const { handleOpen } = useContext(WidgetContext);
    return (
      <div className="whatsapp-icon">
        <Whatsapp />
      </div>
    );
  }
}
export default WhatsAppButton;
