import React, { useState, useEffect } from "react";

import data from "./data.json";
import "./App.css";
import { JobComponents, Header } from "./components";

function App() {
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        setJobs(data);
    }, []);

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

        return tags.some((tag) => filters.includes(tag));
    };

    const handleTagClick = (tag) => {
        setFilters([...filters, tag]);
    };

    const handleFilterClick = (passedFilter) => {
        setFilters(filters.filter((f) => f !== passedFilter));
    };

    const filteredJobs = jobs.filter(filterFunc);

    return (
        <div className="App">
            <Header />
            <div className="filter">
                {" "}
                {filters?.map((filter) => (
                    <span
                        className="filterDesc"
                        onClick={() => handleFilterClick(filter)}
                    >
                        {filter}
                        <span className="filterDelete">x</span>
                    </span>
                ))}
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
