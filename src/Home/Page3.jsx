import React from "react";
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Icon, Button } from "antd";
import QueueAnim from "rc-queue-anim";

export default function Page3({ isMobile }) {
  return (
    <ScrollOverPack id="page3" className="content-wrapper page">
      <TweenOne
        key="image"
        className="image3 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: "easeOutQuad" }}
        style={{ transform: "translateX(-100px)", opacity: 0 }}
      />
      <QueueAnim
        className="text-wrapper"
        key="text"
        type={isMobile ? "bottom" : "right"}
        leaveReverse
        style={{ top: "40%" }}
      >
        <h2 key="h2">Servicio 3</h2>
        <p key="p" style={{ maxWidth: 280 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          aperiam blanditiis dolorem! Reiciendis ipsa, accusantium adipisci,
          molestiae beatae assumenda repellat veritatis ducimus sit ratione,
          eligendi a consequatur et? Ad, magni.
        </p>
        <div key="button">
          <a>
            <Button type="primary" size="large">
              Ir
              <Icon type="right" />
            </Button>
          </a>
        </div>
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page3.propTypes = {
  isMobile: PropTypes.bool,
};
