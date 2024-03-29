import React, { Component } from "react";
import List from "./List";
import Detail from "./Detail";
import Cart from "./Cart";

export default class Ex_Shoe extends Component {
  state = {
    shoeArr: [
      {
        id: 1,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 995,
        image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
      },
      {
        id: 2,
        name: "Adidas Prophere Black White",
        alias: "adidas-prophere-black-white",
        price: 450,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 990,
        image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
      },
      {
        id: 3,
        name: "Adidas Prophere Customize",
        alias: "adidas-prophere-customize",
        price: 375,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 415,
        image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
      },
      {
        id: 4,
        name: "Adidas Super Star Red",
        alias: "adidas-super-star-red",
        price: 465,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 542,
        image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
      },
      {
        id: 5,
        name: "Adidas Swift Run",
        alias: "adidas-swift-run",
        price: 550,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 674,
        image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
      },
      {
        id: 6,
        name: "Adidas Tenisky Super Star",
        alias: "adidas-tenisky-super-star",
        price: 250,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 456,
        image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
      },
      {
        id: 7,
        name: "Adidas Ultraboost 4",
        alias: "adidas-ultraboost-4",
        price: 450,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 854,
        image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
      },
      {
        id: 8,
        name: "Adidas Yeezy 350",
        alias: "adidas-yeezy-350",
        price: 750,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 524,
        image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
      },
      {
        id: 9,
        name: "Nike Adapt BB",
        alias: "nike-adapt-bb",
        price: 630,
        description:
          "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        shortDescription: "Paul George is the rare high-percentage shooter",
        quantity: 599,
        image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
      },
      {
        id: 10,
        name: "Nike Air Max 97",
        alias: "nike-air-max-97",
        price: 650,
        description:
          "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        shortDescription: "Paul George is the rare high-percentage shooter",
        quantity: 984,
        image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
      },
      {
        id: 11,
        name: "Nike Air Max 97 Blue",
        alias: "nike-air-max-97-blue",
        price: 450,
        description:
          "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        shortDescription: "Paul George is the rare high-percentage shooter",
        quantity: 875,
        image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
      },
      {
        id: 12,
        name: "Nike Air Max 270 React",
        alias: "nike-air-max-270-react",
        price: 750,
        description:
          "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        shortDescription: "Paul George is the rare high-percentage shooter",
        quantity: 445,
        image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
      },
    ],
    detail: {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },

    cart: [], //chứa obj shoe khi user click button add
  };

  handleChangeDetail = (shoe) => {
    this.setState({
      detail: shoe,
    });
  };

  handleAddToCart = (shoe) => {
    /**
     * 2 trường hợp
     * trường hợp 1: sản phẩm chưa có trong giỏ hàng => push, số lượng mặc định là 1
     * trường hợp 2: sản phẩm đã có trong giỏ hàng=> ko push, tăng số lượng lên 1 đơn vị
     */
    let cloneCart = [...this.state.cart];
    //kiểm tra sản phẩm được thêm có trong giỏ hàng hay chưa
    let index = cloneCart.findIndex((item) => {
      return item.id == shoe.id;
    });
    console.log("✝️ ~ Ex_Shoe ~ index ~ index:", index);
    if (index == -1) {
      //ko tìm thấy => th1
      //tạo 1 obj mới từ obj cũ để có thêm key Amount
      let newShoe = { ...shoe, amount: 1 };
      cloneCart.push(newShoe);
    } else {
      //tìm thấy => th2
      //tăng số lượng lên 1
      cloneCart[index].amount++;
    }
    this.setState({ cart: cloneCart });
  };

  render() {
    return (
      <div className="row container-fluid w-100">
        <List
          handleAddToCart={this.handleAddToCart}
          handleViewDetail={this.handleChangeDetail}
          shoeArr={this.state.shoeArr}
        />
        <Detail shoe={this.state.detail} />
        <Cart cart={this.state.cart} />
      </div>
    );
  }
}
