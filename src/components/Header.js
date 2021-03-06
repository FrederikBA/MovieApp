import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul className="header">
                <li><NavLink activeclassname="active" to="/">Search</NavLink></li>
                <li><NavLink activeclassname="active" to="/movies-list">Movies List</NavLink></li>
                <li><NavLink activeclassname="active" to="/movies-table">Movies Table</NavLink></li>
                <li><NavLink activeclassname="active" to="/movies-table-edit">Edit/Delete</NavLink></li>
                <li><NavLink activeclassname="active" to="/add-movie">Add Movie</NavLink></li>
            </ul>
        </div>
    )
}

export default Header