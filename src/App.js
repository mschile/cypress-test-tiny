import React, { Fragment } from 'react'
import { HashRouter, Route, NavLink } from 'react-router-dom'

import './styles.css'

export default function App() {
  return (
    <HashRouter>
      <div>
        <h1>Single Page App</h1>
        <ul className="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio-details">Portfolio Details</NavLink>
          </li>
        </ul>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio-details" component={PortfolioDetails} />
        </main>
        <Compose />
      </div>
    </HashRouter>
  )
}

function Compose() {
  return (
    <Fragment>
      <Home />
      <About />
      <PortfolioDetails />
    </Fragment>
  )
}

function Home() {
  return (
    <section className="home">
      <h1>You're home!</h1>
    </section>
  )
}

function About() {
  return (
    <section className="about">
      <h1>About</h1>
    </section>
  )
}

function PortfolioDetails() {
  return (
    <section className="portfolio-details">
      <h1>Portfolio Details</h1>
    </section>
  )
}
