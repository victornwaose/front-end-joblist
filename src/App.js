import React, { useState, useEffect } from "react";

import data from "./data.json";
import "./App.css";
import JobComponents from "./components/jobComponents/JobComponents";

function App() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setJobs(data);
    }, []);

    return (
        <div className="App">
            <h1>
                {jobs?.map((job) => (
                    <JobComponents job={job} />
                ))}
            </h1>
        </div>
    );
}

export default App;
