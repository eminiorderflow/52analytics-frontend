import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import OverviewPage from './components/OverviewPage';

const Overview = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Overview Dashboard</h3>
      </Col>
    </Row>
    <Row>
      <OverviewPage />
    </Row>
  </Container>
);

export default Overview;
