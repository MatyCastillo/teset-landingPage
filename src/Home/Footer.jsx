import React from "react";
import { Row, Col } from "antd";

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Servicios</h2>
              <div>
                <a target="_blank " href="#">
                  Ejemplo
                </a>
              </div>
              <div>
                <a href="#">Ejemplo</a>
              </div>
              <div>
                <a href="#">Ejemplo</a>
              </div>
              <div>
                <a href="#">Ejemplo</a>
              </div>
              <div>
                <a target="_blank " href="#">
                  Ejemplo
                </a>
              </div>
              <div>
                <a target="_blank " href="#">
                  Ejemplo
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Servicios</h2>
              <div>
                <a target="_blank " href="#">
                  Ejemplo
                </a>
              </div>
              <div>
                <a href="#">Ejemplo</a>
              </div>
              <div>
                <a href="#">Ejemplo</a>
              </div>
              <div>
                <a href="#">Ejemplo</a>
              </div>
              <div>
                <a target="_blank " href="#">
                  Ejemplo
                </a>
              </div>
              <div>
                <a target="_blank " href="#">
                  Ejemplo
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Servicios</h2>
              <div>
                <a target="_blank " href="#">
                  Ejemplo
                </a>
              </div>
              <div>
                <a href="#">Ejemplo</a>
              </div>
              <div>
                <a href="#">Ejemplo</a>
              </div>
              <div>
                <a href="#">Ejemplo</a>
              </div>
              <div>
                <a target="_blank " href="#">
                  Ejemplo
                </a>
              </div>
              <div>
                <a target="_blank " href="#">
                  Ejemplo
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <img
                  className="title-icon"
                  src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                  alt=""
                />
                LOGO
              </h2>
              <div>
                Eficiencia y geolocalización de vehículos y pasajeros en una red
                de transporte.
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span
            style={{
              lineHeight: "16px",
              paddingRight: 12,
              marginRight: 11,
              borderRight: "1px solid rgba(255, 255, 255, 0.55)",
            }}
          >
            <a href="#" rel="noopener noreferrer" target="_blank">
              Brand
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a href="#" rel="noopener noreferrer" target="_blank">
              Seguimiento GPS
            </a>
          </span>
          {/*<span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>*/}
          <span style={{ marginRight: 12 }}>Copyright © 2022</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
