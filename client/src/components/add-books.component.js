import React, { Component } from "react";
import BookDataService from "../services/book.service";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default class AddBook extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeNameAuthor = this.onChangeNameAuthor.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeISBN = this.onChangeISBN.bind(this);
    this.onChangeCategorie = this.onChangeCategorie.bind(this);
    this.onChangePageNumber = this.onChangePageNumber.bind(this);
    this.onChangeStok = this.onChangeStok.bind(this);
    this.onChangePubDate = this.onChangePubDate.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.newBook = this.newBook.bind(this);

    this.state = {
      id: null,
      title: "",
      nameAuthor: "",
      price: "",
      ISBN: "",
      categorie: "",
      pageNumber: "",
      stok: "",
      pubDate: "",

      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeNameAuthor(e) {
    this.setState({
      nameAuthor: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onChangeISBN(e) {
    this.setState({
      ISBN: e.target.value,
    });
  }

  onChangeCategorie(e) {
    this.setState({
      categorie: e.target.value,
    });
  }

  onChangePageNumber(e) {
    this.setState({
      pageNumber: e.target.value,
    });
  }

  onChangeStok(e) {
    this.setState({
      stok: e.target.value,
    });
  }

  onChangePubDate(e) {
    this.setState({
      pubDate: e.target.value,
    });
  }

  saveBook() {
    var data = {
      title: this.state.title,
      nameAuthor: this.state.nameAuthor,
      price: this.state.price,
      ISBN: this.state.ISBN,
      categorie: this.state.categorie,
      pageNumber: this.state.pageNumber,
      stok: this.state.stok,
      pubDate: this.state.pubDate,
    };

    BookDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          nameAuthor: response.data.nameAuthor,
          price: response.data.price,
          ISBN: response.data.ISBN,
          categorie: response.data.categorie,
          pageNumber: response.data.pageNumber,
          stok: response.data.stok,
          pubDate: response.data.pubDate,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newBook() {
    this.setState({
      id: null,
      title: "",
      nameAuthor: "",
      price: "",
      ISBN: "",
      categorie: "",
      pageNumber: "",
      stok: "",
      pubDate: "",

      submitted: false,
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/books"} className="navbar-brand">
            BookShop
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/books"} className="nav-link">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <br />
        <br />
        <br />
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newBook}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  name="title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="nameAuthor">Name Of Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameAuthor"
                  required
                  value={this.state.nameAuthor}
                  onChange={this.onChangeNameAuthor}
                  name="nameAuthor"
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  required
                  value={this.state.price}
                  onChange={this.onChangePrice}
                  name="price"
                />
              </div>

              <div className="form-group">
                <label htmlFor="ISBN">ISBN</label>
                <input
                  type="text"
                  className="form-control"
                  id="ISBN"
                  required
                  value={this.state.ISBN}
                  onChange={this.onChangeISBN}
                  name="ISBN"
                />
              </div>

              <div className="form-group">
                <label htmlFor="categorie">Categorie</label>
                <input
                  type="text"
                  className="form-control"
                  id="categorie"
                  required
                  value={this.state.categorie}
                  onChange={this.onChangeCategorie}
                  name="categorie"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pageNumber">Numbers of Pages</label>
                <input
                  type="number"
                  className="form-control"
                  id="pageNumber"
                  required
                  value={this.state.pageNumber}
                  onChange={this.onChangePageNumber}
                  name="PageNumber"
                />
              </div>

              <div className="form-group">
                <label htmlFor="stok">Number in stock</label>
                <input
                  type="number"
                  className="form-control"
                  id="stok"
                  required
                  value={this.state.stok}
                  onChange={this.onChangeStok}
                  name="stok"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pubDate">Publication Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="pubDate"
                  required
                  value={this.state.pubDate}
                  onChange={this.onChangePubDate}
                  name="pubDate"
                />
              </div>

              <button onClick={this.saveBook} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
