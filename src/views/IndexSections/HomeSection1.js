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
import { Button, Container, Row, Col, CardImg, Card } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <section className="section bg" style={{ backgroundColor: "none" }}>
          <Container>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <Card className="bg-default shadow border-0">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/img-1-1200x1000.jpg")}
                    top
                  />
                  <blockquote className="card-blockquote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-bg"
                      preserveAspectRatio="none"
                      viewBox="0 0 583 95"
                    >
                      <polygon
                        className="fill-default"
                        points="0,52 583,95 0,95"
                      />
                      <polygon
                        className="fill-default"
                        opacity=".2"
                        points="0,42 583,95 683,0 0,95"
                      />
                    </svg>
                    <h4 className="display-3 font-weight-bold text-white">
                      Design System
                      </h4>
                    <p className="lead text-italic text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                      </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5" style={{ backgroundColor: "#00baff", color: "#ffffff" }}>
                    <i className="ni ni-settings" />
                  </div>
                  <h3 style={{ color: "#2b2728" }}>Our customers</h3>
                  <p>
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you're good to go.
                    </p>
                  <p>
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you're good to go.
                    </p>
                  <a
                    className="font-weight-bold text-warning mt-5"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    A beautiful UI Kit for impactful websites
                    </a><br></br>
                  <Button
                    className="mt-4"
                    color="alkali"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Learn more
                          </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Hero;
