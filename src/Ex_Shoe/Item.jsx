import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { image, name, price } = this.props.data;
    return (
      <div className="col-3">
        <img src={image} className="w-100" alt="" />
        <h6>{name}</h6>
        <h6>{price + "$"}</h6>

        <button
          className="btn-primary"
          onClick={() => {
            this.props.handleClickAdd(this.props.data);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.props.handleClickView(this.props.data);
          }}
          className="btn-dark"
        >
          View
        </button>
      </div>
    );
  }
}
