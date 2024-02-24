import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  renderShoeList = () => {
    return this.props.shoeArr.map((item) => {
      return (
        <Item
          handleClickAdd={this.props.handleAddToCart}
          handleClickView={this.props.handleViewDetail}
          key={item.id} //key={item.id} tạo ra để reactjs dễ render hơn khi item phình ra
          data={item}
        />
      );
    });
  };

  render() {
    return <div className="row col-7">{this.renderShoeList()}</div>;
  }
}
