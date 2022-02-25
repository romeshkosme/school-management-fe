import React, { useRef, useEffect, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { connect } from "react-redux";
import { onInputChange } from "../store/class/classAction";
import { useParams } from "react-router-dom";

function CreateSection(props) {
  const [, setState] = useState();
  const simpleValidator = useRef(
    new SimpleReactValidator({
      element: (message) => <div className="text-sm text-right">{message}</div>,
    })
  );
  const { id } = useParams();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      const payload = {};
      console.log("id", id);
    //   payload["standard"] = id;
    //   payload["section"] = props.section.section;
    //   props.addSection(payload);
    } else {
      simpleValidator.current.showMessages();
      setState({});
    }
  };

  return (
    <div className="createSection">
      <div className="createSection_header flex justify-between p-2 px-4">
        <h1>Create Section</h1>
      </div>
      <div className="createSection_body">
        <div className="createSection_form m-4">
          <form>
            <div className="flex flex-wrap">
              <div className="createSection_form_field flex flex-col m-2">
                <label htmlFor="standard">
                  Standard <small>Required</small>
                </label>
                <input
                  type="text"
                  id="standard"
                  value={props.class.standard ? props.class.standard : ""}
                  onChange={(e) =>
                    props.onInputChange("standard", e.target.value)
                  }
                />
                {simpleValidator.current.message(
                  "standard",
                  props.class.standard,
                  "required"
                )}
              </div>
            </div>
          </form>
          <div>
            <button className="btn btn-primary" onClick={onHandleSubmit}>
              Create Section
            </button>
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
export default connect(mapStateToProps, { onInputChange })(CreateSection);
