import * as React from "react";

const MyProjects = () => {
  const allProjects = [
    {
      title: "Inspiration",
      logo: "https://inspiration.davidl.fr/social.png",
      what: "My mentor david ask me to rework the design of the site using TailwindCSS.",
      description:
        "This project is to learn TailwindCSS and work with it on other projects. With tailwind we can update faster the CSS and we use a tool that is used by a lot of developers today",
      lien: "https://inspiration.davidl.fr/",
    },
    {
      title: "Art au Féminin",
      logo: "data:image/png;base64,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",
      what: "Art au Féminin is a French podcast website about the feminist artists.",
      description:
        "I rework the website to make it more user-friendly and responsive, change the design and migrate everything we use (plugins/extension) to be up to date.",
      lien: "https://www.artaufeminin.fr",
    },
    {
      title: "React Native Heroes",
      logo: "https://b.thumbs.redditmedia.com/0u5zVNYsWhbZtr45bDy9FskeK3BOD1a3291XeQPg1Kc.png",
      what: "React-Native-Heroes is a React Native application to discover the best React Native Developers.",
      description:
        "I made a clone of Product Hunt with React Native, GraphQL, Apollo, Hasura, Heroku and more.",
      lien: "https://react-native-heroes-matthysdev.vercel.app/",
    },
    {
      title: "Matthys.dev",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/blackLogo.png",
      what: "This website is my portfolio, you can see my projects and contact me.",
      description:
        "With this website, Recruiters can find my projects and contact me if they are interested in my profile.",
      lien: "https://matthys.dev",
    },
    {
      title: "BrawlApp",
      logo: "https://www.meme-arsenal.com/memes/9ed65d5cfbd6002def61d46b2dd2f64c.jpg",
      what: "A Flutter project to learn the language Dart.",
      description:
        "We select BrawlStar because it's a fun game and we want to learn Dart with a funny method. This is a school project.",
      lien: "https://github.com/MatthysDucrocq/projetflutter",
    },
    {
      title: "Symfony Project",
      logo: "https://avatars.githubusercontent.com/u/143937?v=4",
      what: "Symfony School Project to learn the langage.",
      description:
        "We made an E-shop project to learn Symfony, I work with a friend for this school project and we use Composer and Github",
      lien: "https://github.com/Corentyn/ProjetSymfony",
    },
    {
      title: "Co'feature App",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/coffeatureApp/master/assets/img/astro.png",
      what: "Co'Feature App is a mobile application to find coffee shops in your area.",
      description:
        "In UX/UI courses I made mokeup and I find them pretty so i decided by myself to make this app during my free time.",
      lien: "https://github.com/MatthysDucrocq/coffeatureApp",
    },
    {
      title: "Disk Orelsan",
      logo: "https://pbs.twimg.com/profile_images/1461470035835301896/I_NT0dhM_400x400.jpg",
      what: "Three.js Project to make a 3D model of Orelsan disk.",
      description:
        "I made this during a night when I want to learn Three.js, Orelsan just releases his disk so I decided to make a 3D model of it.",
      lien: "https://github.com/MatthysDucrocq/threeJsOrelsanDisk",
    },
    {
      title: "SpaceCraft",
      logo: "https://cdn0.iconfinder.com/data/icons/jumpicon-space-filled-line-1/32/-_Rocket-Space-Ship-Spacecraft-Launch-512.png",
      what: "React Native Project to make a spaceship selection.",
      description:
        "I follow a React Native Bootcamp and i made this project during a 3 days course.",
      lien: "https://github.com/MatthysDucrocq/spacecraft",
    },
    {
      title: "Office Hours",
      logo: "https://i.pinimg.com/originals/8c/8d/2a/8c8d2a06f82a817f856b35ab1c6f6146.jpg",
      what: "Video Edit",
      description:
        "With my mentor David, we made every week a live where we discuss about the current computing tools we use to work. I edit the live and we upload videos on Youtube.",
      lien: "https://www.youtube.com/watch?v=cKEe5cArM_Y&list=PLmewDYeBL3XINJcq8pIsnM0XmDe3xyxdE",
    },
    {
      title: "Slides",
      logo: "https://images.assetsdelivery.com/compings_v2/muslumstock/muslumstock1811/muslumstock181100444.jpg",
      what: "My slides presentation.",
      description:
        "I made slides to share the tools that i like to use to other people.i made them by using mdx-deck who is the tools that you can use to upload your slides like a website.",
      lien: "https://matthys.dev/slides",
    },
  ];

  return (
    <div>
      <ul className="liste">
        {allProjects.map((project) => {
          return (
            <>
              <div className="flex flex-col md:flex-row mt-12 mb-12 m-auto items-center">
                <div className=" justify-center text-center w-1/3">
                  <a
                    href={project.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400"
                  >
                    <img
                      className="m-auto border-2 rounded-md border-purple-400 "
                      src={project.logo}
                      alt=""
                      width={128}
                      height={128}
                    />

                    <p className="p-4 ">{project.title}</p>
                  </a>
                </div>
                <div className="  w-2/3 text-justify md:text-left">
                  <div className="text-white pb-2">{project.what}</div>
                  <div className="text-white">{project.description}</div>
                </div>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MyProjects;
