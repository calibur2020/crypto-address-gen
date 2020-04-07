import React from "react";
import { Link } from "dva/router";
import { connect } from "dva";
import { navBarWrapper } from "./NavBar.module.scss";

const NavBar = () => (
  <div className={navBarWrapper}>
    <div className="logoLeft">Address Generator</div>
    <div className="controls">
      <div className="navRight">
        <Link to="/segwit" className="navRightLink link">
          segWit
        </Link>
        <Link to="/multisig" className="navRightLink">
          multiSig
        </Link>
      </div>
    </div>
  </div>
);

export default NavBar;
