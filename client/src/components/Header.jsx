import React from 'react';
import { Link } from "react-router-dom";
import SavingsIcon from '@mui/icons-material/Savings';

const Header = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand fs-1" to="/" >
             <SavingsIcon />
                iSpark</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                     <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                    </li>

                    <li className="nav-item">

                        <Link className="nav-link active fs-5" aria-current="page" to="/user">Customer</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active fs-5" aria-current="page" to="/transfer">Transfer</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link active fs-5" aria-current="page" to="/history">History</Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link className="nav-link active fs-5" aria-current="page" to="/contact">Contact</Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

}

export default Header;