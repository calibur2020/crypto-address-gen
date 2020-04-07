import React from "react";
import { connect } from "dva";
import { Link } from "dva/router";
import { homePageWrapper } from "./index.module.scss";

const HomePage = () => (
  <div className={homePageWrapper}>
    <div className="HomeTitle">Choose an address generator</div>
    <div className="generatorBtnContainer">
      <Link to="/segwit">segWit</Link>
      <Link to="/multisig">multiSig</Link>
    </div>
  </div>
);

export default HomePage;
