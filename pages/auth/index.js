import React from 'react';
import User from '../../components/user';

const authIndexPage = (props) => (
  <div>
    <h1>The auth index page - {props.appName}</h1>
    <User name="Ja" age={28} />
  </div>
);

authIndexPage.getInitialProps = context => {
  console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({appName: 'Super App (Auth)'});
      }, 1000);
    });
  return promise;
}

export default authIndexPage;
