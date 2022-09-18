import React from "react";

import "./JobComponent.css";

const Components = ({
    //destructure the props of the job api
    job: {
        logo,
        company,
        position,
        postedAt,
        contract,
        location,
        id,
        languages,
        tools,
    },
}) => {
    const languagesTools = [];

    //handles displaying either tools or languages
    if (languages) {
        languagesTools.push(...languages);
    }

    if (languages) {
        languagesTools.push(...tools);
    }

    return (
        <div className="jobs">
            <div className="job">
                <div className="jobContainer">
                    <img src={logo} alt="logo" className="logo" />
                    <div className="jobCards">
                        <div className="jobDetails">
                            <h1 className="jobCompany">{company}</h1>{" "}
                        </div>
                        <div className="jobTags">
                            <h2 className="jobPosition">{position}</h2>
                            <h1 className="jobContract">
                                {postedAt} . {contract} . {location}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="Desc">
                    {languagesTools
                        ? languagesTools.map((languagesTool) => (
                              <span>{languagesTool}</span>
                          ))
                        : ""}
                </div>
            </div>
        </div>
    );
};

export default Components;
