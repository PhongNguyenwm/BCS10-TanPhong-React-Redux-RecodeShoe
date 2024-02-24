import React, { Component } from "react";
import { connect } from "react-redux";
import {
  decreaseAmountAction,
  deleteShoeAction,
  increaseAmountAction,
} from "./redux/action";

class Cart extends Component {
  render() {
    // let { name, price, image } = this.props.cart;
    console.log(this.props.cart);
    return (
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/*render with map */}
            {this.props.cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <strong>{item.price * item.amount}</strong>
                  </td>
                  <td>
                    <button
                      onClick={(params) => {
                        this.props.handleDecrease(item.id);
                      }}
                      style={{ margin: 5 }}
                      className="btn btn-dark"
                    >
                      -
                    </button>
                    <strong>{item.amount}</strong>
                    <button
                      onClick={() => {
                        this.props.handleIncrease(item.id);
                      }}
                      style={{ margin: 5 }}
                      className="btn btn-success"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <img src={item.image} style={{ width: 80 }} />
                  </td>
                  <td>
                    <button
                      onClick={(params) => {
                        this.props.handleDelete(item.id);
                      }}
                      className="btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => {
      dispatch(deleteShoeAction(id));
    },
    handleIncrease: (id) => {
      dispatch(increaseAmountAction(id));
    },
    handleDecrease: (id) => {
      dispatch(decreaseAmountAction(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
