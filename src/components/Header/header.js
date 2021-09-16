import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <ul className="container navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}