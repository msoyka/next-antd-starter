import Image from "next/image";
import { Row, Col, List, Typography } from "antd";
import { Container } from "ui";

const { Text, Link } = Typography;

export const Footer = () => {
  return (
    <section>
      <Image
        src="/assets/bg-tealwhite-bottom-scaled.jpg"
        alt="Decoration Border"
        width={2560}
        height={171}
      />
      <Container>
        <Row justify="space-between" align="top">
          <Col xs={24} sm={8}>
            <List
              size="small"
              header={
                <Text strong type="secondary">
                  explore.
                </Text>
              }
              dataSource={[
                { label: "About", link: "about" },
                { label: "Services", link: "/services" },
                { label: "Blog", link: "/blog" },
                { label: "Contact", link: "/contact" },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <Link href={item.link}>{item.label}</Link>
                </List.Item>
              )}
            />
          </Col>
          <Col flex="70px" xs={{ order: 10 }} sm={{ order: 0 }}>
            <Image
              src="/assets/gudtimes-badge.png"
              alt="Company Badge"
              width={70}
              height={96}
            />
          </Col>
          <Col xs={24} sm={8}>
            <List
              size="small"
              header={
                <Text strong type="secondary">
                  studio
                </Text>
              }
              dataSource={[
                { type: "email", value: "hello@gudtimes.com" },
                { type: "phone", value: "123-456-7894" },
                {
                  type: "address",
                  value: "5500 GROSSMONT CENTER DR. LA MESA, CA  – SPACE 107",
                },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <Text>{item.value}</Text>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
