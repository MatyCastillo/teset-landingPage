import React from "react";
import DocumentTitle from "react-document-title";
import { enquireScreen } from "enquire-js";
import Header from "./Header";
import Banner from "./Banner";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Contact from "./Contact";
import Services from "./Services";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import "./static/style";
import { ServicesDataSource } from "./data.source";
import { BackTop } from "antd";

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isFirstScreen: true,
    isMobile,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === "enter",
    });
  };
  render() {
    return [
      <Header
        key="header"
        id="header"
        isFirstScreen={this.state.isFirstScreen}
        isMobile={this.state.isMobile}
        dataSource={ServicesDataSource}
      />,
      <Banner key="banner" onEnterChange={this.onEnterChange} />,
      <Services
        id="services"
        key="services"
        dataSource={ServicesDataSource}
        isMobile={this.state.isMobile}
      />,
      <Contact key="contact" />,
      <Footer key="footer" />,
      <WhatsAppButton key="whatsapp-button" />,
      <DocumentTitle title="TESETGPS" key="title" />,
    ];
  }
}
export default Home;
