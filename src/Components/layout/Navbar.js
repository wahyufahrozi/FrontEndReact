import React, { Component } from "react";
import M from "materialize-css";
import logo from "../../Assets/Library.png";
import "./Navbar.css";
import AllCategory from "../../Helpers/AllCategory";
import AllTime from "../../Helpers/AllTime";
class Navbar extends Component {
  render() {
    const {
      title,
      author,
      image_url,
      date,
      year,
      description,
      genre,
      onChange,
      onSubmit,
      modalId
    } = this.props;
    return (
      <div>
        <nav>
          <div className="nav-wrapper grey lighten-5">
            <a
              href="#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large "
            >
              <i className="material-icons black-text">menu</i>
            </a>

            <a className="right brand-logo black-text">
              <img src={logo} height="26px" /> Library
            </a>
            <ul className="left hide-on-med-and-down">
              <li>
                <a
                  data-target="AllCategory"
                  className="dropdown-trigger black-text"
                  href="#"
                  style={{
                    marginLeft: "100px"
                  }}
                >
                  All Catergory
                  <i className="material-icons right ">arrow_drop_down</i>
                  <ul id="AllCategory" className="dropdown-content black-text">
                    {AllCategory.map((category, index) => {
                      return (
                        <li key={index}>
                          <a href="#" className="black-text">
                            {category}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </a>
              </li>

              <li>
                <a
                  data-target="AllTime"
                  className="dropdown-trigger black-text"
                  href="#"
                >
                  All Time
                  <i class="material-icons right ">arrow_drop_down</i>
                  <ul id="AllTime" className="dropdown-content black-text">
                    {AllTime.map((category, index) => {
                      return (
                        <li key={index}>
                          <a href="#" className="black-text">
                            {category}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </a>
              </li>
              <li>
                <div className="input-field">
                  <input
                    style={{
                      borderRadius: "100px",
                      background: "transparent",
                      width: "300px",
                      height: "55px",
                      marginTop: "4px",
                      border: "solid 0.1px black"
                    }}
                    id="search"
                    className="black-text"
                    type="search"
                    placeholder="Search"
                  />
                  <label class="label-icon black-text" for="search">
                    <i class="material-icons black-text">search</i>
                  </label>
                  <i class="tiny material-icons">close</i>
                </div>
              </li>
            </ul>
          </div>
          <ul id="slide-out" className="sidenav">
            <li>
              <div className="user-view">
                <a href="#user">
                  <img
                    className="circle"
                    src="https://icon-library.net/images/github-icon-png/github-icon-png-27.jpg"
                  />
                </a>
                <a href="#name">
                  <span className="black-text name">
                    Wahyu Fahrozi Rezeki Ramadhan
                  </span>
                </a>
                <a href="#email">
                  <span className="black-text email">jdandturk@gmail.com</span>
                </a>
              </div>
            </li>
            <li>
              <a href="#!">
                Explore
                <i class="material-icons left ">explore</i>
              </a>
            </li>
            <li>
              <a href="#!">
                History
                <i class="material-icons left ">history</i>
              </a>
            </li>
            <li>
              <a className=" modal-trigger" href="#" data-target={modalId}>
                Add Book
                <i class="material-icons left ">add_circle_outline</i>
              </a>
            </li>
          </ul>
        </nav>
        <div id={modalId} class="modal">
          <div class="modal-content">
            <div className="right modal-close close">X</div>
            <h4>Add Data</h4>
            <div className="row">
              <form onSubmit={onSubmit} className="col s12">
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">title</i>
                  <input
                    name="title"
                    placeholder="title"
                    id="title"
                    type="text"
                    className="validate"
                    //value={title}
                    onChange={onChange}
                  />
                  <label className="active" htmlFor="title">
                    Title
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">contacts</i>
                  <input
                    name="author"
                    placeholder="Author"
                    id="author"
                    type="text"
                    className="validate"
                    //value={author}
                    onChange={onChange}
                  />
                  <label className="active" htmlFor="author">
                    Author
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">code</i>
                  <input
                    name="image_url"
                    placeholder="Image Url"
                    id="image_url"
                    type="text"
                    class="validate"
                    //value={image_url}
                    onChange={onchange}
                  />
                  <label className="active" htmlFor="image_url">
                    Image Url
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">today</i>
                  <input
                    name="date"
                    placeholder="Date"
                    id="date"
                    type="text"
                    className="validate"
                    //value={date}
                    onChange={onChange}
                  />
                  <label className="active" htmlFor="date">
                    Date
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">today</i>
                  <input
                    name="year"
                    placeholder="Year"
                    id="year"
                    type="text"
                    className="validate"
                    // value={year}
                    onchange={onchange}
                  />
                  <label className="active" htmlFor="year">
                    Year
                  </label>
                </div>
                <div className="input-field col s12">
                  <i className="tiny material-icons prefix ">description</i>
                  <input
                    name="description"
                    placeholder="Description"
                    id="description"
                    type="text"
                    className="validate"
                    //value={description}
                    onchange={onchange}
                  />
                  <label className="active" htmlFor="description">
                    Description
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">code</i>
                  <input
                    name="genre"
                    placeholder="Genre"
                    id="genre"
                    type="text"
                    className="validate"
                    //value={genre}
                    onchange={onchange}
                  />
                  <label className="active" htmlFor="genre">
                    Genre
                  </label>
                </div>
                <div class="modal-footer">
                  <button class="modal-close waves-effect waves-light btn yellow darken-4">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
