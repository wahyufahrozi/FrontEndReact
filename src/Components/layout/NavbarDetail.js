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
        Data <b>{this.props.title} </b> Berhasil Terhapus
      </SweetAlert>
    );
    //      warning
    //   showCancel
    //   confirmBtnText="Yes, delete it!"
    //   confirmBtnBsStyle="danger"
    //   title="Are you sure?"
    //   onConfirm={this.deleteFile}
    //   onCancel={this.onCancel}
    //   focusCancelBtn
    // >
    //   You will not be able to recover this imaginary file!

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
              <a href="http://localhost:3000/" className="left">
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
                  <a onClick={() => this.deleteThisGoal()}>Delete</a>
                  {this.state.alert}
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <section
          style={{
            backgroundImage: `url(${this.props.url_image})`
          }}
        ></section>
        <div id="modal-edit" class="modal">
          <div class="modal-content">
            <div className="right modal-close close">X</div>
            <h4>Edit Data</h4>
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
export default NavbarDetail;
