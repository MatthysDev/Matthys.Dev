import * as React from "react";

const MyPosters = () => {
    const allPosters = [
        {
            title: "Lomepal Mauvais Ordre Light",
            logo: "https://inspiration.davidl.fr/social.png",
        },
        {
            title: "Lomepal Mauvais Ordre Dark",
            logo: "https://inspiration.davidl.fr/social.png",
        }
    ];

    return (
        <div className="grid grid-cols-3">
            {allPosters.map((poster) => (
                <div key={poster.title} className="w-1/4">
                    <p>{poster.title}</p>
                    <img src={poster.logo} alt={poster.title} />
                </div>
            ))}
        </div>
    );
};

export default MyPosters;
