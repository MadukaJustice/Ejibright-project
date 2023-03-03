"use client";

import { Col, Container, Row } from "react-bootstrap";
import styles from "../../page.module.css";

const About = () => {
  return (
    <>
      <div className={styles.AboutWrapper}>
        <Container>
          <Row>
            <Col sm={6}>
              <div className={styles.Atitle}>
                <p>Who we are.</p>
              </div>
              <div className={styles.title}>
                <p>Our Businesses</p>
                <p>
                  Ejibright Group comprises of many subsidiaries whom as a
                  diversified conglomerate, our interest in multiple industries
                  indicate our determination to cater to our vision of basic
                  needs.
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <div className={styles.imageOne}></div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className={styles.imageTwo}></div>
            </Col>
            <Col sm={6}>
              <div className={styles.title}>
                <p>Sustainability</p>
                <p>
                  Our approach to sustainability goes beyond compliance with
                  regulatory expectations. We are driven by a desire to
                  contribute to, and positively impact the development of our
                  society at large.
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <div className={styles.title}>
                <p>Customer Satisfaction</p>
                <p>
                  We are poised to deliver exceptional service which creates
                  long term Customer loyalty and retention.
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <div className={styles.imageThree}></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
