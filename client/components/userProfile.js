import React, { Component } from "react";

const UserProfile = props => {
  return (
    <div className="profile">
      <h1>Welcome, {props.name} to Simple Banking</h1>
      <img src="https://imgur.com/Lr5IybM.png"></img>
      <ul>
        <li className="profileList"> ID: {props.id} </li>
        <li className="profileList"> Email: {props.email} </li>
        <li className="profileList"> docID: {props.docId} </li>
        <li className="profileList"> Status: {props.permission} </li>
      </ul>
    </div>
  );
};

export default UserProfile;
