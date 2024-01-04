//2 - links com react router

import "./Navbar.css"

import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> */}
            <NavLink to="/"
            // className={({ isActive}) => (isActive ? "esta-ativo" : "nao-ativo")} -> teria que ser colocado em todos se usado dessa maneira. 
            >
                Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
}

export default Navbar