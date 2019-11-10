import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const SentimentPage = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h3 className="bold-text">Sentiment Analysis</h3>
          <h3 className="subhead">Example subhead</h3>
        </div>
        <p>Your content here</p>
      </CardBody>
    </Card>
  </Col>
);

export default SentimentPage;
