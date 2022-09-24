import React, { useState, useEffect } from "react";

import data from "./data.json";
import "./App.css";
import JobComponents from "./components/jobComponents/JobComponents";
import Header from "./components/header/Header";

function App() {
    const [jobs, setJobs] = useState([]);

    const [filters, setFilters] = useState([]);

    useEffect(() => {
        setJobs(data);
    }, []);

    //  function for making a tg search
    const filterFunc = ({ tools, role, languages, level }) => {
        if (filters.length === 0) {
            return true;
        }

        const tags = [role, level];

        if (tools) {
            tags.push(...tools);
        }

        if (languages) {
            tags.push(...languages);
        }
        // filter search
        return tags.some((tag) => filters.includes(tag));
    };

    const handleTagClick = (tag) => {
        setFilters([...filters, tag]);
    };

    // function for deleting a serach
    const handleFilterClick = (passedFilter) => {
        setFilters(filters.filter((f) => f !== passedFilter));
    };

    // function for clearing search
    const handleClearClick = (passedFilter) => {
        setFilters([]);
    };

    const filteredJobs = jobs.filter(filterFunc);

    return (
        <div className="App">
            <Header />
            <div className="filter-c">
                {filters.length > 0 && (
                    <div className="filter">
                        <div></div>
                        {filters?.map((filter) => (
                            <div
                                className="filterDesc"
                                onClick={() => handleFilterClick(filter)}
                            >
                                {filter}
                                <span className="filterDelete">x</span>
                            </div>
                        ))}{" "}
                        <span
                            className="clear"
                            onClick={() => handleClearClick()}
                        >
                            clear
                        </span>
                    </div>
                )}
            </div>

            <div>
                {filteredJobs?.map((job) => (
                    <JobComponents
                        key={job.id}
                        job={job}
                        handleTagClick={handleTagClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
