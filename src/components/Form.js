import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="formPosition">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Comment</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <div>
          <button type="button" class="btn btn-outline-success">
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
