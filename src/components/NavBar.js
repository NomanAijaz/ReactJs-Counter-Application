import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" class="btn btn-warning">
              Total Increments <span class="badge bg-secondary">{this.props.totalValues}</span>
            </button>
          </div>
        </nav>
      </>
    );
  }
}
