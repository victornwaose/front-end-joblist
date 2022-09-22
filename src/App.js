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

    const filteredJobs = jobs.filter(filterFunc);

    return (
        <div className="App">
            <Header />
            <h1>
                {filteredJobs?.map((job) => (
                    <JobComponents
                        key={job.id}
                        job={job}
                        handleTagClick={handleTagClick}
                    />
                ))}
            </h1>
        </div>
    );
}

export default App;
