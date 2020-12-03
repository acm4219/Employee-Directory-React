import React from "react";

function Searchbar() {
    return(
        <div className="container"> 
        <br />
           <form className="row">
               <input className="form-control mr-sm-2 col" type="search" placeholder="Search" />
               <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>                
           </form>
        </div>
    )

}

export default Searchbar