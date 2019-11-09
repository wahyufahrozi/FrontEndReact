import React, { Component } from "react";
// import logo from "./logo.svg";
import M from "materialize-css";
import Navbar from "../Components/layout/Navbar";
import Carousels from "../Components/Carousel/Carousels";
import Card from "../Components/Card/Card";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: props.book,
      tempBook: {
        title: "",
        author: "",
        image_url: "",
        date: "",
        year: "",
        description: "",
        genre: ""
      }
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    M.AutoInit();

    if (this.props.location.state) {
      const { newBook, isEdit, isDelete } = this.props.location.state;

      if (isEdit) {
        this.setState({
          book: newBook
        });
      }
      if (isDelete) {
        this.setState({
          book: newBook
        });
      }
    }

    const elems = document.querySelectorAll(".carousel");
    const options = {
      duration: 100
    };
    M.Carousel.init(elems, options);
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      tempBook: { ...this.state.tempBook, [name]: value }
    });
  };

  onClick = e => {
    e.preventDefault();
    const {
      title,
      author,
      image_url,
      date,
      year,
      description
    } = this.state.tempBook;

    const newNovel = {
      title,
      author,
      image_url,
      date,
      year,
      description
    };

    this.setState({
      book: [...this.state.book, newNovel]
    });

    const elems = document.querySelectorAll(".carousel");
    const options = {
      duration: 100
    };
    M.Carousel.init(elems, options);

    console.log("onclick");
    console.log(this.state.book);
  };

  render() {
    console.log(this.state.book);

    return (
      <div className="Home">
        <Navbar
          modalId="modaladd"
          title={this.state.tempBook.title}
          author={this.state.tempBook.author}
          image_url={this.state.tempBook.image_url}
          date={this.state.tempBook.date}
          year={this.state.tempBook.year}
          description={this.state.tempBook.description}
          genre={this.state.tempBook.genre}
          onChange={this.handleChange}
          onSubmit={this.onClick}
        />
        <Carousels />

        <Card book={this.state.book} alert={this.props.location.search} />
        <header className="App-header">{}</header>
      </div>
    );
  }
}

export default Home;
