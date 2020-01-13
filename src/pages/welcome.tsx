import React from "react";
import { Layout, Menu, Breadcrumb, Card } from "antd";
import styled from "@emotion/styled";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Description } from "../components/description";
import { StatsRow } from "../components/stats-row";

const Header = styled(Layout.Header)({
  background: "white"
});
const Content = styled(Layout.Content)({
  background: "white"
});
const Logo = styled.h1();

export function Welcome() {
  return (
    <Layout>
      <Header>
        <Grid>
          <Row>
            <Col>
              <Logo>🖇️ daoscan</Logo>
            </Col>
          </Row>
        </Grid>
      </Header>
      <Content>
        <Grid>
          <Row>
            <Col md={12}>
              <Description/>
            </Col>
          </Row>
          <StatsRow/>
        </Grid>
      </Content>
    </Layout>
  );
}
