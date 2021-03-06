/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, CardBody, Badge, Card } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250" style={{ backgroundColor: "#00baff" }}>

            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      A beautiful Design System{" "}
                      <span>completed with examples</span>
                    </h1>
                    <p className="lead text-white">
                      The design system comes with four pre-built pages to
                      help you get started faster. You can change the text and
                      images and you're good to go.
                      </p>
                    <div className="btn-wrapper">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-send" style={{ color: "#00baff" }} />
                        </span>
                        <span className="btn-inner--text" style={{ color: "#595153" }}>
                          Contact Us
                          </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4" style={{ backgroundColor: "#00baff", color: "#ffffff" }}>
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text text-uppercase" style={{ color: "#2b2728" }}>
                          Download Argon
                          </h6>
                        <p className="description mt-3" style={{ color: "#595153" }}>
                          Argon is a great free UI package based on Bootstrap
                          4 that includes the most important components and
                          features.
                          </p>
                        <div>
                          <Badge color="alkali" pill className="mr-1">
                            design
                            </Badge>
                          <Badge color="alkali" pill className="mr-1">
                            system
                            </Badge>
                          <Badge color="alkali" pill className="mr-1">
                            creative
                            </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="alkali"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                          </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4" style={{ backgroundColor: "#00baff", color: "#ffffff" }}>
                          <i className="ni ni-istanbul" />
                        </div>
                        <h6 className="text text-uppercase" style={{ color: "#2b2728" }}>
                          Build Something
                          </h6>
                        <p className="description mt-3" style={{ color: "#595153" }}>
                          Argon is a great free UI package based on Bootstrap
                          4 that includes the most important components and
                          features.
                          </p>
                        <div>
                          <Badge color="alkali" pill className="mr-1">
                            business
                            </Badge>
                          <Badge color="alkali" pill className="mr-1">
                            vision
                            </Badge>
                          <Badge color="alkali" pill className="mr-1">
                            success
                            </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="alkali"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                          </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4" style={{ backgroundColor: "#00baff", color: "#ffffff" }}>
                          <i className="ni ni-planet" />
                        </div>
                        <h6 className="text text-uppercase" style={{ color: "#2b2728" }}>
                          Prepare Launch
                          </h6>
                        <p className="description mt-3" style={{ color: "#595153" }}>
                          Argon is a great free UI package based on Bootstrap
                          4 that includes the most important components and
                          features.
                          </p>
                        <div>
                          <Badge color="alkali" pill className="mr-1">
                            marketing
                            </Badge>
                          <Badge color="alkali" pill className="mr-1">
                            product
                            </Badge>
                          <Badge color="alkali" pill className="mr-1">
                            launch
                            </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="alkali"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                          </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Hero;
