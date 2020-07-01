import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/pics/recruitask.png";
import BlockButton from "../BlockButton/BlockButton";
import { Container } from "reactstrap";

export default function Header(props) {
  return (
    <>
      <div id="jumbo-welcome">
        {/* <img id="imgHeader" src={headerImg} alt="no" /> */}
        <div className="row">
          <div className="col">
            <Link to="/">
              <img id="imgHeader" src={headerLogo} alt="no" />
            </Link>
          </div>
          <div className="col"></div>
          <div className="col d-flex justify-content-end mr-4 mt-3">
            <Container>
              <BlockButton
                text={"Edit your profile"}
                onClick={() => props.open()}
                className="btn-edit-profile"
              />
            </Container>
            {/* <Button onClick={() => props.open()} type="primary">
              Edit your profile
            </Button> */}
          </div>
        </div>
        <div className="row">
          <div className="col displayText">
            Hi {props.userName}, <br />
            Here are your tasks.
          </div>
        </div>
      </div>
    </>
  );
}
