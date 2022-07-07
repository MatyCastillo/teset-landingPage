import React from "react";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { Icon, Button, Input, Col } from "antd";
const InputGroup = Input.Group;
const { TextArea } = Input;

export default function Contact() {
  return (
    <ScrollOverPack id="contact" className="content-wrapper page">
      <QueueAnim
        className="text-wrapper-bottom"
        key="text"
        leaveReverse
        type="bottom"
      >
        <h2 key="h2">TENÉS DUDAS? NOSOTROS LAS RESOLVEMOS</h2>
        <p key="p">
          Si tenés alguna pregunta o querés saber más sobre nuestra tecnología
          ¡No dudes en contactarnos!
        </p>
        <InputGroup className="contact-input" compact>
          <Col span={4}>
            <Input placeholder="Nombre" />
          </Col>
          <Col span={4}>
            <Input placeholder="Apellido" />
          </Col>
          <br />
          <Col span={8}>
            <Input placeholder="Email" />
          </Col>
          <br />
          <Col span={4}>
            <Input placeholder="Compañia" />
          </Col>
          <Col span={4}>
            <Input placeholder="Telefono" />
          </Col>
          <br />
          <Col span={8}>
            <TextArea rows={4} placeholder="Escriba su consulta aquí" />
          </Col>
        </InputGroup>
        <div key="button">
          <a>
            <Button type="primary" size="large">
              Enviar
              <Icon type="right" />
            </Button>
          </a>
        </div>
      </QueueAnim>

      <TweenOne
        key="image"
        className="image4 bottom-wrapper"
        animation={{
          y: 0,
          opacity: 1,
          duration: 550,
          delay: 150,
          ease: "easeOutQuad",
        }}
        style={{ transform: "translateY(50px)", opacity: 0 }}
      />
    </ScrollOverPack>
  );
}
