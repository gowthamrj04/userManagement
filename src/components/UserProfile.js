import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

function UserProfile(props) {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="row userprofile">
      <div className="col-md-12">
        <h5>User Profile</h5>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              ref={register({ required: true })}
            />
            <div className="text-danger">
              {errors.firstName && "First name is required"}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              placeholder="Enter email address"
              name="emailAddress"
              ref={register({ required: true })}
            />
            <div className="text-danger">
              {errors.emailAddress && "Email Id is required"}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact No</label>
            <input
              type="number"
              name="contact"
              className="form-control"
              id="contact"
              placeholder="Enter contact no"
              ref={register({ required: true })}
            />
            <div className="text-danger">
              {errors.contact && "Contact no is required"}
            </div>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              ref={register({ required: true })}
            />
            <NavLink to="/">
              <small>Agree to the terms and conditions</small>
            </NavLink>
            <div className="text-danger">
              {errors.terms &&
                "Please accept the terms and conditions by checking the checkbox"}
            </div>
          </div>
          <button type="submit" name="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default UserProfile;
