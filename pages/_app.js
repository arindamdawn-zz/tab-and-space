import App from 'next/app'
import Router from 'next/router';
import { initGA, logPageView } from '../utils/analytics';

import '../styles/index.css';
import '../styles/markdown.scss';
import '../styles/custom.scss';

export default class MyApp extends App {
  componentDidMount() {
    initGA()
    logPageView()
    Router.events.on('routeChangeComplete', logPageView)
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}