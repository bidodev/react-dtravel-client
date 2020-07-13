import React from "react";
import Header from './header/header.component'
import Discover from './main/discover.component'
import Search from './search/search.component'
import AdventurousMood from './adventurousmood/adventurousmood.component.jsx'

function Aside() {
    console.log("Reload Aside")
    return (
        <div className="aside">
            <Header />
            <Search />
            <Discover />
            <AdventurousMood/>
        </div>
    );
}

export default Aside;
