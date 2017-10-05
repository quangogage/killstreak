import React, { Component } from "react";
import "../../../styles/css/Shop/Shop.css";
import gageMath from "../../../gagelib/Math";

import Nav from "../Nav/Nav";
import Header from "./Header";
import Products from "./Products/Products";
import Modal from "./Modal/Modal";
import Cart from "./Cart/Cart";
import productList from "./Products/list";

// Random list of characters to be placed
// to the left and right of the grid header.
var deathCharacters = ["K", "S", "t", "ò"];

/*
  This component is in charge of the shop!

  It is reponsible for maintaining the user's
  cart, what products they're looking at,
  and wether or not the product modal ( that
  appears when you click on a product ) is open
  or not  
*/

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: 1,
      modalIsOpen: false, // Product Info Modal
      panelIsOpen: false, // Cart Panel
      cart: []
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
    this.checkPath = this.checkPath.bind(this);
  }

  componentDidMount() {
    this.checkPath(this.props.path);
  }
  componentWillReceiveProps(nextProps) {
    this.checkPath(nextProps.path);
  }

  checkPath(path) {
    // If there is a custom item entered in the URL
    if (path.length > 6 && path.substring(0, 5) === "/Shop") {
      var productName = path.substring(6);
      productName.replace("%20", "");
      var newProduct = this.getProduct(productName);

      // If the modal isn't open
      if (this.state.modalIsOpen === false) {
        // Set new product/open modal.
        this.selectProduct(newProduct);
        this.toggleModal(true);
      } else if (newProduct !== this.state.selectedProduct) {
        this.selectProduct(newProduct);
      }
    } else {
      if (this.state.modalIsOpen === true) {
        this.toggleModal(false);
      }
    }
  }

  // Get a product index based on it's name
  getProduct(name) {
    for (var i = 0; i < productList.length; i++) {
      var thisProduct = productList[i];
      if (thisProduct.name.toLowerCase() === name.toLowerCase()) {
        return i;
      }
    }
  }

  // Open/Close modal.
  toggleModal(state) {
    var newState = state || !this.state.modalIsOpen;
    this.setState({ modalIsOpen: newState });
    if (this.state.panelIsOpen) {
      this.togglePanel(false);
    }
  }

  // Open/Close [ame;].
  togglePanel(state) {
    var newState = state || !this.state.panelIsOpen;
    this.setState({ panelIsOpen: newState });
    if (this.state.modalIsOpen) {
      this.toggleModal(false);
    }
  }

  // Change selected item
  selectProduct(index) {
    this.setState({ selectedProduct: index });
  }

  // Add an item to your cart
  addToCart(index) {
    var product = productList[index];
    var cartCopy = this.state.cart.slice();
    cartCopy[cartCopy.length] = {
      name: product.name,
      price: product.price
    };
  }

  render() {
    var deathChar =
      deathCharacters[
        Math.floor(gageMath.getRandom(0, deathCharacters.length - 1))
      ];
    return (
      <div className="Shop">
        <Nav pages={this.props.pages} currentPage={this.props.currentPage} />
        <Header />

        {/* Products */}
        <div className="grid-header">
          <div className="text-container">
            <div className="death">{deathChar}</div>
            <div className="title">Products</div>
            <div className="death flipped">{deathChar}</div>
          </div>
        </div>

        {/* Products */}
        <Products
          openModal={() => this.toggleModal(true)}
          selectProduct={index => this.selectProduct(index)}
        />

        {/* Product Modal */}
        <Modal
          name={productList[this.state.selectedProduct].name}
          notes={productList[this.state.selectedProduct].notes}
          images={productList[this.state.selectedProduct].images}
          price={productList[this.state.selectedProduct].price}
          isOpen={this.state.modalIsOpen}
          close={() => this.toggleModal(false)}
        />

        {/* Cart */}
        <Cart
          items={this.state.cart}
          panelIsOpen={this.state.panelIsOpen}
          openPanel={() => this.togglePanel(true)}
          closePanel={() => this.togglePanel(false)}
        />
      </div>
    );
  }
}

export default Shop;
