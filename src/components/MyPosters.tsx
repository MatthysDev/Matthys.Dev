import * as React from "react";

const MyPosters = () => {
    const allPosters = [
        {
            title: "Lomepal Mauvais Ordre",
            logo: "https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/lomepal-dark.png",
            version: 'Dark'
        },
        {
            title: "Lomepal Mauvais Ordre",
            logo: "https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/lomepal-light.png",
            version: 'Light'
        }
    ];

    return (
        <div className="grid grid-cols-2 m-auto justify-center">
            {allPosters.map((poster) => (
                <div key={poster.title} className="w-2/3 m-auto my-12">
                    <p className="text-2xl font-bold my-4">{poster.title}  {poster.version}</p>
                    <img src={poster.logo} alt={poster.title} />
                </div>
            ))}
        </div>
    );
};

export default MyPosters;
