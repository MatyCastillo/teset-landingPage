import React from "react";
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Icon, Button } from "antd";
import QueueAnim from "rc-queue-anim";

export default function Page1({ isMobile }) {
  return (
    <ScrollOverPack id="page1" className="content-wrapper page">
      <TweenOne
        key="image"
        className="image1 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: "easeOutQuad" }}
        style={{ transform: "translateX(-100px)", opacity: 0 }}
      />
      <QueueAnim
        type={isMobile ? "bottom" : "right"}
        className="text-wrapper"
        key="text"
        leaveReverse
      >
        <h2 key="h2">Servicio 1</h2>
        <p key="p" style={{ maxWidth: 310 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quas
          eveniet incidunt distinctio obcaecati aspernatur, amet consequatur,
          animi alias facere dolores! Tempore eveniet officiis at, illo itaque
          aperiam autem corrupti!
        </p>
        <div key="button">
          <a>
            <Button type="primary" size="large">
              Ver Más
              <Icon type="right" />
            </Button>
          </a>
        </div>
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page1.propTypes = {
  isMobile: PropTypes.bool,
};
