import React, { useState } from "react";
import { Button, Modal, Form, Input, FormGroup, Label } from "reactstrap";

const SubmitTasks = ({ modal, toggle, taskId }) => {
  const [repo, setRepo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.token;

    try {
      let request = await fetch(
        `${process.env.REACT_APP_URL}/api/task/submission/${taskId}`,
        {
          method: "PUT",
          body: JSON.stringify({ repo }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (request.ok) {
        toggle();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <h1 className="submit--title-size"> Sumit your task</h1>
        <Form onSubmit={handleSubmit} className="container">
          <div className="row">
            <div className="col">
              <FormGroup>
                <div className="submit--label-center">
                  <Label for="repo">repo url</Label>
                </div>
                <Input
                  className="submit--input ml-3"
                  type="url"
                  name="repo"
                  id="repo"
                  placeholder="repo url"
                  value={repo}
                  onChange={(e) => setRepo(e.target.value)}
                  required
                />
              </FormGroup>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-5"></div>
            <div className="col-md-2 mt-2">
              <Button type="submit" className="next--button-width  next--color">
                Next
              </Button>
            </div>
            <div className="col-md-5"></div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default SubmitTasks;
