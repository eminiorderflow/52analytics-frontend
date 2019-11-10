import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import SentimentPage from './components/SentimentPage';

const Sentiment = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Sentiment Dashboard</h3>
      </Col>
    </Row>
    <Row>
      <SentimentPage />
    </Row>
  </Container>
);

export default Sentiment;
