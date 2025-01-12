import { MdSearch } from "react-icons/md";

const Search =({handleSearchNote})=>{
    return(
        <div className="search">
            <MdSearch  className="search-icons" size="1.3em"/>
            <input  type="text" placeholder="Type to search note..." onChange={(e) =>handleSearchNote(e.target.value)}/>
        </div>
    )
}

export default Search;