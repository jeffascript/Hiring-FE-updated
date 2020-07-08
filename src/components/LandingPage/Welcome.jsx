import React, { useEffect, useState } from "react";
import { getUserDataByToken, getAllTasks } from "../../actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import DisplayCard from "../../components/CardComponent/DisplayCard";
import Header from "../Header/Header.jsx";
import ProfileEditForm from "../Form/ProfileEditForm";
import { useHistory } from "react-router-dom";


const Welcome = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState();
  const [openEditForm, setOpenEditForm] = useState(false);

  const changeOpenEditForm = () => setOpenEditForm(!openEditForm);
  const updateCurrentUser = (user) => setCurrentUser(user);
  const history =  useHistory()

  useEffect(() => {
    const token = localStorage.token;
    if (token) {
      dispatch(getUserDataByToken(token));
      dispatch(getAllTasks(token));
    }
    else {     
     history.push("/")
    }

    const getCurrentUser = async () => {
      let request = await fetch(`${process.env.REACT_APP_URL}/api/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      if (request.ok) {
        let userInfo = await request.json();
        setCurrentUser(userInfo);
      }
    };
    getCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {state.loggedInUser && (
        <>
          <div style={{ overflowX: "hidden" }}>
            <Header
              userName={state.loggedInUser.username}
              open={changeOpenEditForm}
            />
            <DisplayCard />
            {currentUser && (
              <ProfileEditForm
                initialValue={currentUser}
                close={changeOpenEditForm}
                updateUser={updateCurrentUser}
                visible={openEditForm}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Welcome;
