import React from 'react';
import User from '../../components/user';

const authIndexPage = () => (
  <div>
    <h1>The auth index page</h1>
    <User name="Ja" age={28} />
  </div>
);

export default authIndexPage;
