import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import logo from "../../public/img/teset-logo.png";
import { Menu, Row, Col, Icon, Button, Popover, Badge } from "antd";
import ScrollAnim from "rc-scroll-anim";

var Link = ScrollAnim.Link;
const searchEngine = "Google";

export default class Header extends React.Component {
  static propTypes = {
    isFirstScreen: PropTypes.bool,
    isMoblie: PropTypes.bool,
  };
  state = {
    menuVisible: false,
  };
  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  };
  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  };

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  };

  handleSelectFilter = (value, option) => {
    const optionValue = option.props["data-label"];
    return (
      optionValue === searchEngine ||
      optionValue.indexOf(value.toLowerCase()) > -1
    );
  };

  render() {
    const { dataSource, isFirstScreen, isMoblie } = this.props;
    const { menuVisible } = this.state;
    const menuMode = isMoblie ? "inline" : "horizontal";
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
    } = dataSource;
    const headerClassName = classNames({
      clearfix: true,
      "home-nav-white": !isFirstScreen,
    });

    const menu = [
      <Menu mode={menuMode} defaultSelectedKeys={["home"]} id="nav" key="nav">
        <Menu.Item key="home">
          <Link to="banner">Inicio</Link>
        </Menu.Item>
        <Menu.Item key="docs/spec">Qué hacemos</Menu.Item>
        <Menu.SubMenu key="services" title="Servicios">
          {childWrapper.children.map((element) => (
            <Menu.Item key={element.name}>{element.name}</Menu.Item>
          ))}
        </Menu.SubMenu>
        <Menu.Item key="docs/pattern">Nosotros</Menu.Item>
        <Menu.Item key="docs/resource">
          <Link to="contact">Contacto</Link>
        </Menu.Item>
      </Menu>,
    ];
    return (
      <header id="header" className={headerClassName}>
        {menuMode === "inline" ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col lg={4} md={5} sm={24} xs={24}>
            <Link id="logo" to="banner">
              <img alt="logo" src={logo} />
            </Link>
          </Col>
          <Col lg={20} md={19} sm={0} xs={0}>
            {menuMode === "horizontal" ? menu : null}
          </Col>
        </Row>
      </header>
    );
  }
}
