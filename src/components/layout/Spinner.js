import React, { Fragment } from 'react';
import spinner from './spinner.svg';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block', padding: '70px' }}
      alt='Loading...'
    />
  </Fragment>
);
