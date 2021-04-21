import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos"

export default function Dictionary(props) {

    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function handleResponse(response) {
        setResults(response.data[0]);
    }
    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f91700001000001f28c382f0ebe475e9b6d4081ef0a50a7";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};

        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelResponse);
    }
    
    function handlePexelResponse(response) {
        setPhotos(response.data.photos);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
        }

     function load() {
         setLoaded(true);
         search();
     }   

     if (loaded) {  
    return (
        <div className="Dictionary">
            <section>
                <h1>What word do you want me to look up?</h1>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}></input>
            </form>
            <div className="hint">Suggestions: home, hygge, work, hiraeth, book ...</div>
            </section>
            <Result results={results}/>
            <Photos photos={photos}/>
        </div>
    );
        } else {
        load();
        return "no";
    }
}