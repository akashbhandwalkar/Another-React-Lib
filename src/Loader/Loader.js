import React from "react";
import PropTypes from "prop-types";
import './Loader.css'

const  Loader = props => {
  
  const { size = 'xs' } = props;
  return (
    <div className={"loader " + size}></div>
  )
}


Loader.propTypes = {
  size: PropTypes.string
};

export default Loader;
