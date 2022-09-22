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
        featured,
        isNew,
        role,
        level,
    },
}) => {
    const tags = [role, level];

    //handles displaying either tools or languages
    if (languages) {
        tags.push(...languages);
    }

    if (languages) {
        tags.push(...tools);
    }

    return (
        <div className="jobs">
            <div className="job">
                <div className="jobContainer">
                    {featured && <div className="feature-highlight"></div>}
                    <img src={logo} alt="logo" className="logo" />
                    <div className="jobCards">
                        <div className="jobDetails">
                            <h1 className="jobCompany">
                                {company}
                                {isNew && <span className="isNew">New</span>}
                                {featured && (
                                    <span className="Featured">Featured</span>
                                )}
                            </h1>{" "}
                        </div>
                        <div className="jobTags">
                            <h2 className="jobPosition">{position}</h2>
                            <h1 className="jobContract">
                                {postedAt} . {contract} . {location}
                            </h1>
                        </div>
                    </div>
                </div>
                <span className="lines"></span>
                <div className="Desc">
                    {tags
                        ? tags.map((tag) => (
                              <span className="descTools">{tag}</span>
                          ))
                        : ""}
                </div>
            </div>
        </div>
    );
};

export default Components;
