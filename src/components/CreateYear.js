import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { onInputChange } from "../store/class/classAction";
import SimpleReactValidator from "simple-react-validator";

function CreateYear(props) {
  const [, setState] = useState();
  const simpleValidator = useRef(
    new SimpleReactValidator({
      element: (message) => <div className="text-sm text-right">{message}</div>,
    })
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      const payload = {};
      payload["year"] = props.class.year;
      console.log("submit")
      //   props.addYear(payload);
    } else {
      simpleValidator.current.showMessages();
      setState({});
    }
  };
  return (
    <div className="createYear">
      <div className="createYear_header flex justify-between p-2 px-4">
        <h1>Create Year</h1>
      </div>
      <div className="createYear_body">
        <div className="createYear_form m-4">
          <form>
            <div className="flex flex-wrap">
              <div className="createYear_form_field flex flex-col m-2">
                <label htmlFor="year">
                  Year <small>Required</small>
                </label>
                <input
                  type="text"
                  id="year"
                  value={props.class.year ? props.class.year : ""}
                  onChange={(e) => props.onInputChange("year", e.target.value)}
                />
                {simpleValidator.current.message(
                  "year",
                  props.class.year,
                  "required"
                )}
              </div>
            </div>
          </form>
          <div class="">
            <button onClick={handleSubmit}>Add Year</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    class: state.class,
  };
};
export default connect(mapStateToProps, { onInputChange })(CreateYear);
