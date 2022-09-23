import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

const Weather = ({temperature}) => {
  return (
    <Typography display="inline" variant="h4">{temperature}</Typography>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number
};

export default Weather;