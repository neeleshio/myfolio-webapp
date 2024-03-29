import React, { useEffect } from 'react';
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import Routes from './Routes'
import Bowser from 'bowser'
import Axios from './axios'
import { ThemeProvider } from 'styled-components';
import { darkThemecolor, lightThemecolor } from './components/Tools/theme'
import { useSelector } from 'react-redux';

const browserHistory = createBrowserHistory()

function App() {
  useEffect(() => {
    if (process.env.REACT_APP_ENV !== "staging") {
      handleUserAgent()
    }
  }, [])

  const state = useSelector((state: any) => state.topbar)

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
      <ThemeProvider theme={state.darkTheme ? darkThemecolor : lightThemecolor}>
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
