import React, { useState } from "react";
import './App.css'


const Searchbooks = (props) => {
    const [searchdata, setSearchData] = useState("");

    const handleChanges = (e) => {
        setSearchData(e.target.value);
    }

    const Reset = () => {
        setSearchData("")
    }

    const SearchFunction = (e) => {
        e.preventDefault();
        props.search(searchdata);
        Reset();
    }

    return (
        <form className="search">
            <input
                value={searchdata}
                onChange={handleChanges}
                type="text"
                placeholder="タイトルを入力"
            />
            <input onClick={SearchFunction} type="submit" value="検索" />
        </form>
    );
}

export default Searchbooks;