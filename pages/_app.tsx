import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import { Layout } from "antd";

import { Header, Footer } from "ui";

const { Header: AntdHeader, Footer: AntdFooter, Content } = Layout;

import "styles/global.less";

const App = ({ Component, pageProps }: AppProps) => {
  // Render Function
  return (
    <>
      <Head>
        <title>Juris</title>
      </Head>
      <Layout style={{ minHeight: "100vh" }}>
        <AntdHeader>
          <Header />
        </AntdHeader>
        <Content>
          <Component {...pageProps} />
        </Content>
        <AntdFooter>
          <Footer />
        </AntdFooter>
      </Layout>
    </>
  );
};

export default App;
