"use client";
import styles from "../../page.module.css";
import { Col, Row, Container } from "react-bootstrap";

const Consult = () => {
  const accomplisment = [
    { numbers: 100, label: "Finished Projects" },
    { numbers: 3, label: "Awards" },
    { numbers: 20, label: "Staffs" },
  ];
  return (
    <>
      <div>
        <Container>
          <Row className="g-0">
            <Col lg={6}>
              <div className={styles.leftCont}>
                <Container>
                  <Row>
                    {accomplisment.map(({ numbers, label }, index) => (
                      <Col sm={6} lg={4} key={index} xs={6}>
                        <div className={styles.block}>
                          <p>{numbers}+</p>
                          <p>{label}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.rightCont}>
                <p>Making the right decision at the right time.</p>
                <p>Reliability to deliver at any services required.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Consult;
