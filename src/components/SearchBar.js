
import './SearchBar.css'
function SearchBar(){
    return(
        <div>
            <div className="search-box">
            <input type="text" id="search" placeholder="Search.."></input>
            <i className="fa-solid fa-magnifying-glass"></i>
            </div>
    

        </div>
    )
}

export default SearchBar;