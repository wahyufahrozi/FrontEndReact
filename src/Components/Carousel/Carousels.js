import React, { Component } from "react";
import "./Carousel.css";
import M from "materialize-css";
import books from "../../Helpers/books";
class Carousels extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="carousel">
        {books.map((book, index) => {
          return (
            <div className="carousel-item">
              <div className="card">
                <div className="card-image">
                  <img src={book.image_url} alt="" />
                  <div className="card-title">
                    <div className="sub-title">{book.title}</div>
                    <span className="subs-title">{book.author}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Carousels;
