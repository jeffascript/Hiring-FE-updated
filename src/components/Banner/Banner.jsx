import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import BlockButton from "../BlockButton/BlockButton";
import DisplayModal from "./DisplayModal";
import LoginIcon from "../../assets/icons/User.png";
import { useCallback } from "react";

export default () => {
  let text = "Get Started";
  const [state, setstate] = useState(false);

  const resetModal = useCallback(() => {
    setstate(false);
  }, []);

  return (
    <Container fluid id="jumbo">
      <Row id="logoRow">
        <div id="logo">
          <img
            src={require("../../assets/pics/recruitask.png")}
            alt="logo"
          ></img>
        </div>
        <div id="btnLoginRow">
          <img
            className="btnLogin"
            src={LoginIcon}
            onClick={() => setstate(!state)}
            alt="no"
          />
          <a href="#" className="close" />
          {state === true ? (
            <DisplayModal show={state} resetModal={resetModal} />
          ) : null}
        </div>
      </Row>

      {/* <Row sm={12} id="motto">The first task-based hiring platform</Row>
        <Row id="mottoCaption">
          We propose real anonymized tasks of companies from all over the world.
          Train yourself, nail the challenge and get hired.
          </Row> */}

      <Container>
        <Row>
          <div className="col-12" id="motto">
            <Container>
              <span> The first task-based hiring platform </span>
            </Container>
          </div>
          <div className="col-12" id="mottoCaption">
            <Container>
              <p>
                We propose real anonymized tasks of companies from all over the
                world. Train yourself, nail the challenge and get hired.
              </p>
            </Container>
          </div>
        </Row>
      </Container>

      <Row className="appBtn">
        <BlockButton text={text} />
      </Row>
    </Container>
  );
};
