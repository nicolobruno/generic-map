import React, { Fragment } from "react";
import PropTypes from "prop-types";

function ButtonContainer({ handleZoomIn, handleZoomOut, handleResetZoom }) {
  return (
    <Fragment>
      <div className="buttonContainer">
        <button className="button" onClick={handleZoomIn}>
          +
        </button>
        <button className="button" onClick={handleZoomOut}>
          -
        </button>
      </div>
      <button className="button" onClick={handleResetZoom}>
        Reset
      </button>
    </Fragment>
  );
}

ButtonContainer.propTypes = {
  handleZoomIn: PropTypes.func,
  handleZoomOut: PropTypes.func,
  handleResetZoom: PropTypes.func
};

export default ButtonContainer;
