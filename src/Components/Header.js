import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg top-sticky navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand" href="#">Axios</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to= '/' className="nav-link" href="#">DashBoard</Link>
                            <Link to= '/AddData' className="nav-link" href="#">AddData</Link>
                            <Link to= '/Contact' className="nav-link" href="#">Contact me</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header