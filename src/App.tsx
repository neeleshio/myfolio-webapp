import React, { useEffect } from 'react';
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import Routes from './Routes'
import Bowser from 'bowser'
import Axios from './axios'

const browserHistory = createBrowserHistory()

function App() {
  useEffect(() => {
    handleUserAgent()
  }, [])

  const handleUserAgent = () => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((res) => {
        const userIp = res.ip
        const userBrowser = Bowser.parse(window.navigator.userAgent).browser;
        const userOS = Bowser.parse(window.navigator.userAgent).os;

        const body = {
          ip: userIp,
          os: userOS,
          browser: userBrowser
        }

        Axios.post('/user-ag', body).then(res => {
          sessionStorage.setItem("userAgent", "true")
        }).catch(err => {
          // console.log(err)
        })
      });
  }

  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
}

export default App;
