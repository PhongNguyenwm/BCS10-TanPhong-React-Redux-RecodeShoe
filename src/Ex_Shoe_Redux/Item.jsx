import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_SHOE, VIEW_DETAIL } from "./redux/constant";
import {
  AddShoe,
  ViewDetailAction,
  addShoeAction,
  viewDetailAction,
} from "./redux/action";

class Item extends Component {
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
let mapDispatchToProps = (dispatch) => {
  return {
    handleClickView: (shoe) => {
      //dispatch về 1 function => function return về action
      dispatch(viewDetailAction(shoe));
    },
    handleClickAdd: (shoe) => {
      dispatch(addShoeAction(shoe));
    },
  };
};

export default connect(null, mapDispatchToProps)(Item);
