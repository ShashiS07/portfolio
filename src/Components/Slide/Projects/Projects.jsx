import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { MainHeadingWrapper } from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

import moviexImage from './ProjectImage/moviexapp.png'
import weatherImage from './ProjectImage/weatherapp.png'
import urlShortnerImage from './ProjectImage/urlshortnerapp.png'
import reactmealImage from './ProjectImage/reactmealapp.png'
import productImage from './ProjectImage/productmanagement.jpg'
import bookmanagement from './ProjectImage/bookmanagement.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "scroll",
    padding: "100px 0 ",
  },
}));

const BridgeTwo = styled.div`
  padding-top: 75px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

  /* min-height: 400px; */
  z-index: 99;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > div:nth-child(2) {
    padding: 50px 0;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    grid-row-gap: 20px;
    width: 90%;
    margin: 30px auto;
    align-items: center;
    justify-content: space-evenly;
    background-size: cover;
    background-position: center;
  }
`;

let projectArray = [
  {
    img: moviexImage,
    title: "MovixDB",
    description: "A web application which provides details of movie and web shows..",
    techStack: [
      "HTML",
      "SCSS",
      "JavaScript",
      "React",
      "Node",
    ],
    repoLink: "https://github.com/ShashiS07/MovixDB",
    demoLink: "https://movix-db-shashis07.vercel.app/",
    features: [
      "API fetching.",
      "Can watch trailer of Movies/Web-Shows.",
      "Searching Function.",
      "Sorting function.",
    ],
    responsibilities : [
      "Developed the module for users so that they can search for Movies/Web-Shows and can see the details.",
      "Fetching different API's for different work.",
      "Developed Video Player API so that user can watch trailers.",
      "Developed Searching and Sorting function."
    ]
  },
  {
    img: weatherImage,
    title: "Weather App",
    description: "A web application which shows the weather information of specific city allacross the world with dynamic background change.",
    techStack: [
      "React",
      "CSS",
      "JavaScript",
      "Node",
    ],
    repoLink: "https://github.com/ShashiS07/Weather-App",
    demoLink: "https://knowweathercondition.netlify.app/",
    features: [
      "API fetching.",
      "Displaying the search input.",
      "Dynamic Images according to weather condition.",
    ],
    responsibilities: [
      "Fetching API to get data and display it on the web page.",
      "Developed pages as per change in temperature and weather condition.",
    ],
  },
  {
    img: urlShortnerImage,
    title: "URL-Shortner Web App",
    description: "A web application which helps us to shorten the long URL.",
    techStack: [
      "React",
      "CSS",
      "JavaScript",
      "Node",
      "Express",
      "MongoDB",
      "Redis"
    ],
    repoLink: "https://github.com/ShashiS07/Project-UrlShortner",
    demoLink: "https://urlshortner07.netlify.app/",
    features: [
      "Shorten the long URL",
      "Redirect to Short URL to original URL",
    ],
    responsibilities: [
      "Developed API for shorting Long URL",
      "Rediss is used for caching.",
      "Developed Page for user intraction.",
      "Intraction between Front-end to Back-end."
    ],
  },
  {
    img: reactmealImage,
    title: "ReactMeal : A Food Order App",
    description: "A food order app which provides functionality to choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home. ",
    techStack: [
      "React",
      "CSS",
      "JavaScript",
      "Node",
      "Express",
      "firebase"
    ],
    repoLink: "https://github.com/ShashiS07/Food-Order-App",
    demoLink: "https://orderfoodfromreactmeal.netlify.app/",
    features: [
      "User can add food item into cart",
      "User can increase/decrease food item from cart",
      "User can order food by providing his/her details.",
    ],
    responsibilities: [
      "Developed page with React.js for user interaction.",
      "Firebase is used.",
      "Developed cart functionality.",
      "Create food order page for ordering the food."
    ],
  },
  {
    img: productImage,
    title: "Product Management",
    description: "It's a backend project which provide functionality of shopping products. ",
    techStack: [
      "JavaScript",
      "Node",
      "Express",
      "MongoDB",
      "AWS-S3"
    ],
    repoLink: "https://github.com/ShashiS07/project-ProductsManagement",
    demoLink: "https://github.com/ShashiS07/project-ProductsManagement",
    features: [
      "User authentication (Signup / Login).",
      "A user can select product for purchase and add into cart items.",
     " A user can order that product.",
      "A user can increase/decrease item from cart.",
      "A user can get the details of a products.",
      "A user can also delete the product from cart.",
    ],
    responsibilities: [
      "Developed CRUD API's for user.",
      "Developed API for user authentication and authorization.",
      "Developed API for adding/removing products into cart items.",
      "Developed order API."
    ],
  },
  {
    img: bookmanagement,
    title: "Online Library Management System",
    description: "It's a backend project which provide functionality of Library. Here user can check about his/her favourite books available in our online library. ",
    techStack: [
      "JavaScript",
      "Node",
      "Express",
      "MongoDB",
      "AWS-S3"
    ],
    repoLink: "https://github.com/ShashiS07/project-ProductsManagement",
    demoLink: "https://github.com/ShashiS07/project-ProductsManagement",
    features: [
      "User authentication (Signup / Login).",
      "A user can select any book to check its details.",
     " A user can put his/her own book in our library.",
      "Authorised user can update/delete his/her own books.",
      "A guest user can also get the details of a products.",
      "A user can give the ratings and review to the book.",
    ],
    responsibilities: [
      "Developed CRUD API's for user.",
      "Developed API for user authentication and authorization.",
      "Developed API for adding/removing book with proper authorization for author.",
      "Create review or rating API."
    ],
  },
];

function Projects() {
  const [panel, setPanel] = React.useState(false);
  let [currentProject, setCurrentProject] = React.useState({});
  const classes = useStyles();
  return (
    <div id="projects">
      <BridgeTwo backgroundImg={currentProject.img}>
        <MainHeadingWrapper>
          <h1>Projects</h1>
          <div></div>
        </MainHeadingWrapper>
        <div>
          {projectArray?.map((project) => (
            <ProjectCard
              key={project.title}
              setCurrentProject={setCurrentProject}
              setPanel={setPanel}
              {...project}
            ></ProjectCard>
          ))}
        </div>
        <Modal
          className={classes.root}
          open={panel}
          onClose={() => setPanel(false)}
        >
          <ProjectDetail
            {...currentProject}
            setPanel={setPanel}
          ></ProjectDetail>
        </Modal>
      </BridgeTwo>
    </div>
  );
}

export default Projects;
