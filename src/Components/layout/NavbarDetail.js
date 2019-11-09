import React, { Component } from "react";
import M from "materialize-css";
import SweetAlert from "react-bootstrap-sweetalert";
import "./Navbardetail.css";
class NavbarDetail extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  constructor(props) {
    super(props);

    this.state = {
      alert: null
    };
  }

  deleteThisGoal() {
    const getAlert = () => (
      <SweetAlert success onConfirm={() => this.hideAlert()}>
        <b>{this.props.title} </b> deleted successfully
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  hideAlert() {
    console.log("Hiding alert...");
    this.setState({
      alert: null
    });
  }

  render() {
    return (
      <div>
        <div className="nav-wrapper">
          <nav className="transparent z-depth-0 nav-detail">
            <div className="na-nav">
              <a href="/" className="left">
                <i className="small material-icons">arrow_back</i>
              </a>
              <ul className="right">
                <li>
                  <a className=" modal-trigger" href="#modal-edit">
                    Edit
                  </a>
                </li>
                <li>|</li>
                <li>
                  <a
                    href={`../?ide=${this.props.alert}`}
                    onClick={() => this.deleteThisGoal()}
                  >
                    Delete
                  </a>
                  {this.state.alert}
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <section
          style={{
            backgroundImage: `url(${this.props.image_url})`
          }}
        ></section>
        <div id="modal-edit" class="modal">
          <div class="modal-content">
            <div className="right modal-close close">X</div>
            <h4>Edit Data</h4>
            <div className="row">
              <form className="col s12">
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">title</i>
                  <input
                    placeholder="title"
                    id="title"
                    type="text"
                    class="validate"
                  />
                  <label for="url_image">Title</label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">contacts</i>
                  <input
                    placeholder="Author"
                    id="author"
                    type="text"
                    class="validate"
                  />
                  <label for="author">Author</label>
                </div>
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
                  <i class="tiny material-icons prefix">today</i>
                  <input
                    placeholder="Date"
                    id="date"
                    type="text"
                    class="validate"
                  />
                  <label for="date">Date</label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">today</i>
                  <input
                    placeholder="Year"
                    id="year"
                    type="text"
                    class="validate"
                  />
                  <label for="year">Year</label>
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
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">code</i>
                  <input
                    placeholder="Genre"
                    id="genre"
                    type="text"
                    class="validate"
                  />
                  <label for="genre">Genre</label>
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
export default NavbarDetail;
