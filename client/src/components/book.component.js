import React, { Component } from "react";
import BookDataService from "../services/book.service";
import { withRouter } from "../common/with-router";
import { Link } from "react-router-dom";

class Book extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    //this.onChangeNameAuthor = this.onChangeNameAuthor.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.getBook = this.getBook.bind(this);
    //this.updatePublished = this.updatePublished.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);

    this.state = {
      currentBook: {
        id: null,
        title: "",
        NameAuthor: "",
        price: "",
        ISBN: "",
        categorie: "",
        pageNumber: "",
        stok: "",
        pubDate: "",
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getBook(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          title: title,
        },
      };
    });
  }

  onChangePrice(e) {
    const price = e.target.value;

    this.setState((prevState) => ({
      currentBook: {
        ...prevState.currentBook,
        price: price,
      },
    }));
  }

  getBook(id) {
    BookDataService.get(id)
      .then((response) => {
        this.setState({
          currentBook: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  /*updatePublished(status) {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      published: status
    };

    TutorialDataService.update(this.state.currentTutorial.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }*/

  updateBook() {
    BookDataService.update(this.state.currentBook.id, this.state.currentBook)
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: "The Book was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteBook() {
    BookDataService.delete(this.state.currentBook.id)
      .then((response) => {
        console.log(response.data);
        this.props.router.navigate("/Books");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentBook } = this.state;

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
        {currentBook ? (
          <div className="edit-form">
            <h4>Book</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentBook.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={currentBook.price}
                  onChange={this.onChangePrice}
                />
              </div>

              {/*<div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {current.published ? "Published" : "Pending"}
        </div>*/}
            </form>

            {/*currentBook.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )*/}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteBook}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateBook}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Book...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Book);
