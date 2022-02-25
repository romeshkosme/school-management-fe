import React from "react";
import { connect } from "react-redux";
import { onInputChange } from "../store/address/addressAction";

function Address(props) {
  return (
    <React.Fragment>
      <div className="form-group input-field-group m-2">
        <label htmlFor="addressLine1">
          Address Line 1<small>(Required)</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="addressLine1"
          value={props.address.addressLine1}
          onChange={(e) => props.onInputChange("addressLine1", e.target.value)}
        />
        {props.simpleValidator.current.message(
          "addressLine1",
          props.address.addressLine1,
          "required"
        )}
      </div>
      <div className="form-group input-field-group m-2">
        <label htmlFor="addressLine2">Address Line 2</label>
        <input
          type="text"
          className="form-control"
          id="addressLine2"
          value={props.address.addressLine2}
          onChange={(e) => props.onInputChange("addressLine2", e.target.value)}
        />
      </div>
      <div className="form-group input-field-group m-2">
        <label htmlFor="landmark">Landmark</label>
        <input
          type="text"
          className="form-control"
          id="landmark"
          value={props.address.landmark}
          onChange={(e) => props.onInputChange("landmark", e.target.value)}
        />
      </div>
      <div className="form-group input-field-group m-2">
        <label htmlFor="city">
          City<small>(Required)</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          value={props.address.city}
          onChange={(e) => props.onInputChange("city", e.target.value)}
        />
        {props.simpleValidator.current.message(
          "city",
          props.address.city,
          "required"
        )}
      </div>
      <div className="form-group input-field-group m-2">
        <label htmlFor="state">
          State<small>(Required)</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="state"
          value={props.address.state}
          onChange={(e) => props.onInputChange("state", e.target.value)}
        />
        {props.simpleValidator.current.message(
          "state",
          props.address.state,
          "required"
        )}
      </div>
      <div className="form-group input-field-group m-2">
        <label htmlFor="zip">
          Zip<small>(Required)</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="zip"
          value={props.address.zip}
          onChange={(e) => props.onInputChange("zip", e.target.value)}
        />
        {props.simpleValidator.current.message("zip", props.address.zip, "required")}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    address: state.address,
  };
};
export default connect(mapStateToProps, { onInputChange })(Address);
