import React, { Component } from "react";
import Navbardetail from "../Components/layout/NavbarDetail";
import Details from "../Components/layout/Details";
import books from "../Helpers/books";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      book: books[0],
      id: 0
    };
  }

  componentDidMount() {
    const { index } = this.props.match.params;

    this.setState({
      book: books[index],
      id: index
    });
  }
  render() {
    const {
      title,
      description,
      image_url,
      date,
      year,
      genre
    } = this.state.book;
    return (
      <div>
        <Navbardetail url_image={image_url} title={title} />
        <Details
          title={title}
          description={description}
          image_url={image_url}
          date={date}
          year={year}
          genre={genre}
          index={this.state.id}
        />
      </div>
    );
  }
}

export default Detail;
