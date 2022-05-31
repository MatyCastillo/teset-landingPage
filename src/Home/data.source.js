import React from "react";
import { Button, Icon } from "antd";
export const ServicesDataSource = {
  wrapper: { className: "home-page-wrapper services-wrapper" },
  page: { className: "home-page services" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>Servicios</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: "services-block-wrapper",
    children: [
      {
        name: "block0",
        className: "services-block",
        md: 8,
        xs: 24,
        children: {
          className: "services-block-item",
          children: [
            {
              name: "image",
              className: "services-block-icon",
              children:
                "https://www.redgps.com/hs-fs/hubfs/Home/img-principal.png?width=800&name=img-principal.png",
            },
            {
              name: "title",
              className: "services-block-title",
              children: (
                <span>
                  <span>
                    <span>
                      <p>Plataforma de rastreo GPS</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <p>
                    Plataforma de rastreo GPS y seguridad, más de 1000 equipos y
                    sensores soportados, y todas las herramientas para impulsar
                    su empresa, compatible con el ecosistema más completo de la
                    industria.
                  </p>
                  <div key="button">
                    <a>
                      <Button type="primary" size="large">
                        Ver Más
                        <Icon type="right" />
                      </Button>
                    </a>
                  </div>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block1",
        className: "services-block",
        md: 8,
        xs: 24,
        children: {
          className: "services-block-item",
          children: [
            {
              name: "image",
              className: "services-block-icon",
              children:
                "https://cdn.motor1.com/images/mgl/Mr1xm/s3/gestion-de-flotas-que-se-debe-considerar-a-la-hora-de-adquirir-un-camion.jpg",
            },
            {
              name: "title",
              className: "services-block-title",
              children: (
                <span>
                  <p>Mantenimiento de flotas</p>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        Administra y gestiona todos los aspectos relacionados
                        con los mantenimientos de una flota, con control de
                        presupuestos, órdenes de servicio, registro de talleres,
                        formularos de inspección, reportes y más.
                      </p>
                      <div key="button">
                        <a>
                          <Button type="primary" size="large">
                            Ver Más
                            <Icon type="right" />
                          </Button>
                        </a>
                      </div>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block2",
        className: "services-block",
        md: 8,
        xs: 24,
        children: {
          className: "services-block-item",
          children: [
            {
              name: "image",
              className: "services-block-icon",
              children:
                "https://www.redgps.com/hs-fs/hubfs/AppTracker-44.4-Ruteo.jpg?width=1000&name=AppTracker-44.4-Ruteo.jpg",
            },
            {
              name: "title",
              className: "services-block-title",
              children: (
                <span>
                  <p>Seguimiento de smartphones</p>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <p>
                    Convierta smartphones en dispositivos GPS capaces de ser
                    rastreados en plataforma, con funciones orientadas a la
                    seguridad, el ruteo y la gestión de personal, con un menú y
                    botones totalmente personalizable de acuerdo las necesidades
                    de cada cliente o cada industria, disponible en Android y
                    iOS.
                  </p>
                  <div key="button">
                    <a>
                      <Button type="primary" size="large">
                        Ver Más
                        <Icon type="right" />
                      </Button>
                    </a>
                  </div>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>P</p>
          </span>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children: "基于阿里云强大的基础资源",
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "企业资源管理" },
          content: {
            className: "content3-content",
            children:
              "云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。",
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "云安全" },
          content: {
            className: "content3-content",
            children:
              "按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。",
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "云监控" },
          content: {
            className: "content3-content",
            children:
              "分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。",
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "移动" },
          content: {
            className: "content3-content",
            children:
              "一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。",
          },
        },
      },
      {
        name: "block4",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "分布式中间件" },
          content: {
            className: "content3-content",
            children:
              "金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。",
          },
        },
      },
      {
        name: "block5",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "大数据" },
          content: {
            className: "content3-content",
            children:
              "一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。",
          },
        },
      },
    ],
  },
};
