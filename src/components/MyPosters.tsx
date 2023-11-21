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
        },
        {
            title: "Angry Monkey",
            logo: "https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/bad-monkey.png",
            version: ''
        },
        {
            title: "Chill Monkey",
            logo: "https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/good-monkey.png",
            version: ''
        },
        // {
        //     title: "Chill Fish",
        //     logo: "https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/fish.png",
        //     version: ''
        // },
        {
            title: "Chill Fox",
            logo: "https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/fox.png",
            version: ''
        },
        {
            title: "Chill Shark",
            logo: "https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/shark.png",
            version: ''
        },
        {
            title: "Chill Skeleton",
            logo: "https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/skeleton.png",
            version: ''
        },
        {
            title: "Chill Snake",
            logo: "https://raw.githubusercontent.com/MatthysDev/Matthys.Dev/main/src/images/posters/snake.png",
            version: ''
        },
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
