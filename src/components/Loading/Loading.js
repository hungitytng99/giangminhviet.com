import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import React from "react";
import PropTypes from 'prop-types';
import "./Loading.scss"

const override = css`
  margin: auto;
  & span{
    border-color: red;
  }
`;

Loading.protoTypes = {
  LoadingComponent: PropTypes.func,
  size: PropTypes.number,
}

Loading.defaultProps = {
  LoadingComponent: PuffLoader,
  size : 150,
}

function Loading(props){
    console.log(typeof(PuffLoader));
    return (
        <div className="background-loading f-screen-background">
          <props.LoadingComponent css={override} size={props.size} />
        </div>
    );
}

export default Loading;