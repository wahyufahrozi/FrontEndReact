import React, { Component } from "react";
import M from "materialize-css";
import "./Card.css";
import books from "../../Helpers/books";
import { Link } from "react-router-dom";
class Card extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="container">
        <h4>List Book</h4>
        <div className="row">
          {books.map((book, index) => {
            return (
              <Link to={`detail/${index}`}>
                <div className="col m4 s12">
                  <div className="card">
                    <div className="card-images">
                      <img src={book.image_url} />
                    </div>
                    <div className="card-content">
                      <span className="card-titles">{book.title}</span>
                      <p>{book.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Card;
