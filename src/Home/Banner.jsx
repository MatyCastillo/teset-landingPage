import React from "react";
import PropTypes from "prop-types";
import ScrollElement from "rc-scroll-anim/lib/ScrollElement";
import GitHubButton from "react-github-button";
import { Icon } from "antd";
import QueueAnim from "rc-queue-anim";
import logo from "../../public/img/logo.png";

function typeFunc(a) {
  if (a.key === "line") {
    return "right";
  } else if (a.key === "button") {
    return "bottom";
  }
  return "left";
}

export default function Banner({ onEnterChange }) {
  return (
    <section className="page banner-wrapper">
      <ScrollElement
        className="page"
        id="banner"
        onChange={({ mode }) => onEnterChange(mode)}
        playScale={0.9}
      >
        <QueueAnim
          className="banner-text-wrapper"
          type={typeFunc}
          delay={500}
          key="banner"
        >
          <img src={logo} alt="logo" />
          <h2 key="h2">SEGUIMIENTO GPS</h2>
          <p key="content">EFICIENCIA Y GEOLOCALIZACIÓN DE VEHÍCULOS</p>
          <span className="line" key="line" />
          <div key="button1" className="start-button clearfix">
            <a>Ver Más</a>
            <a>Contactar</a>
          </div>
        </QueueAnim>
        <Icon type="down" className="down" />
      </ScrollElement>
    </section>
  );
}
Banner.propTypes = {
  onEnterChange: PropTypes.func,
};
