import React, { Component } from "react";
import M from "materialize-css";
import logo from "../../Assets/Library.png";
import "./Navbar.css";
import AllCategory from "../../Helpers/AllCategory";
import AllTime from "../../Helpers/AllTime";
class Navbar extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
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
              <a className=" modal-trigger" href="#modal1">
                Add Book
                <i class="material-icons left ">add_circle_outline</i>
              </a>
            </li>
          </ul>
        </nav>
        <div id="modal1" class="modal">
          <div class="modal-content">
            <div className="right modal-close close">X</div>
            <h4>Add Data</h4>
            <div className="row">
              <form className="col s12">
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">code</i>
                  <input
                    placeholder="Url Image"
                    id="url_image"
                    type="text"
                    class="validate"
                  />
                  <label for="url_image">Url Image</label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">title</i>
                  <input
                    placeholder="Title"
                    id="url_image"
                    type="text"
                    class="validate"
                  />
                  <label for="title">Title</label>
                </div>
                <div className="input-field col s12">
                  <i className="tiny material-icons prefix ">description</i>
                  <input
                    placeholder="Description"
                    id="description"
                    type="text"
                    class="validate"
                  />
                  <label for="description">Description</label>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="#!"
              class="modal-close waves-effect waves-light btn yellow darken-4"
            >
              Save
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
