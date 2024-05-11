import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const SingleUser = ({ user }) => {
  return (
    <div className="user-card-container">
      <img src={user.picture.large} alt="user picture" />
      <div className="street-information">
        <div className="information-layout">
          <div>{user.location.street.number}</div>
          <div className="desc-layout">Street Address</div>
        </div>
        <div className="information-layout">
          <div>{user.location.postcode}</div>
          <div className="desc-layout">PostCode</div>
        </div>
        <div className="information-layout">
          <div>{user.location.street.name}</div>
          <div className="desc-layout">Street Name</div>
        </div>
      </div>
      <div className="user-information">
        <div className="user-name-info">
          {user.name.title}. {user.name.first} {user.name.last},{" "}
          <span className="user-age">{user.dob.age}</span>
        </div>
        <div className="location-info">
          {" "}
          {user.location.city}, {user.location.country}
        </div>
      </div>
      <div className="reach-information">
        <a href="#" className="reach">
          <i className="phone-icon">
            <FaPhone />
          </i>
          {user.phone}
        </a>
        <a href="#" className="reach">
          <i className="mail-icon">
            <FaEnvelope />
          </i>{" "}
          {user.email}
        </a>
      </div>
    </div>
  );
};
export default SingleUser;
