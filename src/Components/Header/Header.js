import React from "react";
import "./style.css";
import Search from '../Search/Search';

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid align-middle">
            <h2 className="navbar-brand align-middle">Employee List</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <Search 
                search={props.search}
                setSearch={props.setSearch}
            />
            </div>
        </div>
        </nav>
    );
  }
  
  export default Header;