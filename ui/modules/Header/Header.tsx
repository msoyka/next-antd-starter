import Image from "next/image";
import { Row, Col, Menu } from "antd";
import { Container } from "ui";

export const Header = () => {
  return (
    <Container>
      <Row justify="space-between" align="bottom">
        <Col flex="250px">
          <Image
            src="/assets/gudtimes-logo.png"
            alt="Rooted Wellness Logo"
            layout='responsive'
            width={250}
            height={53}
          />
        </Col>
        <Col>
          <Menu mode="horizontal">
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Work</Menu.Item>
            <Menu.Item>Studio</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu>
        </Col>
        <Col flex="250px" />
      </Row>
    </Container>
  );
};
