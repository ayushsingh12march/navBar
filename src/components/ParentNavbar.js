import React, { Component } from "react";
//import './styleNavbar.css'
class ParentNavbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-info navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a
              class="nav-link"
              href="#"
              onClick={() => this.props.changeName("Link1")}
            >
              Link1
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default ParentNavbar;
