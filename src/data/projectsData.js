 
import RestCountries from "./../assets/portfolioImages/restcountries.PNG";
import SpaceTourism from "./../assets/portfolioImages/spacetourism.PNG";


// import AWS from "./../assets/portfolioImages/s3.PNG";
// import Todo from "./../assets/portfolioImages/todo.jpg"
// in progress projects

import serv from './../assets/portfolioImages/serv.PNG'
import landingPage from './../assets/portfolioImages/url.jpg'
 
const ProjectsData = [
  {
    id: "fyp",
    img: serv,
    name: "Flashcard Generator",
    stack: ["< Tailwind />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://flashcard-project-rushikesh-p.netlify.app/",
    source: "https://github.com/rushikeshpatil1007/FlashcardProject",
    description:  
        "The Flashcard Generator is a versatile and user-friendly tool designed to enhance the learning process. Its intuitive interface enables users to create personalized digital flashcards, making it suitable for students, professionals, and lifelong learners alike. Users can incorporate text, images, and audio, resulting in dynamic and engaging study materials. The tool's automatic shuffling and spaced repetition features further promote efficient memorization and long-term retention of information. Whether preparing for exams, acquiring language skills, or reinforcing key concepts, the Flashcard Generator proves to be an invaluable companion for accelerating the learning journey.",
  }, 
  {
    id: "rest-countries",
    img: RestCountries,
    name: "Resume Builder",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://resumebuilder-rp.netlify.app/",
    source: "https://github.com/rushikeshpatil1007/resumebuilder-project",
    description:  
        "The Resume Builder is an online platform that simplifies resume creation with customizable templates and real-time previews. Users can input their information, skills, and work experience effortlessly. It offers keyword optimization for tailored applications and supports various export formats. Ideal for job seekers at all levels, it ensures a professional and effective resume presentation.",
  },

  {
    id: "space-tourism",
    img: SpaceTourism,
    name: "To-Do-App",
    stack: ["< React.js />", "< Tailwind/>"],
    live: "https://to-do-app-rp.netlify.app/",
    description:  
        "The To-Do App is a simple and efficient task management tool. It allows users to create, organize, and prioritize tasks with ease. With reminders and notifications, it ensures timely completion of tasks and enhances productivity. Perfect for individuals and teams, it streamlines daily workflows and helps achieve goals efficiently.  ",
  
  },
  // {
  //   id: "cloud-storage",
  //   img: AWS,
  //   name: "Cloud Storage with AWS Simple Storage Service",
  //   stack: ["< AWS S3 /> " , "< JavaScript /> " , "< Express.js />"],
  //   live: "",
  //   source: "https://github.com/rimshub/cloud-storage-s3",
  //   description:  
  //       "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge",
  // },

  // {
  //   id: "advice-generator",
  //   img: Advice,
  //   name: "Advice Generator App",
  //   stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
  //   live: "https://rimshub.github.io/javascript-advice-generator/",
  //   source: "https://github.com/rimshub/javascript-advice-generator",
  //   description:  
  //       "This advice generator app using the Advice Slip API. A small and fun app to practice JavaScript and mobile first workflow and CSS3. It has a responsive design and navigation.",
  // },


  // {
  //   id: "todo",
  //   img: Todo,
  //   name: "JavaScript Todo App",
  //   stack: ["< JavaScript />  ", "< Sass />"],
  //   live: "https://rimshub.github.io/JavaScript-Todo-App/",
  //   source: "https://github.com/rimshub/JavaScript-Todo-App",
  //   description:  
  //       "Responsive JS todo app with color theme switcher. Enables users to add, delete, filter, and clear day-to-day tasks. It has user-friendly interface and navigation. I was able to practice my JavaScript and Sass skills in this project.",
  // },

  // {
  //   id: "dropdown-nav",
  //   img: Page,
  //   name: "Homepage with dropdown navigation / Figma to React",
  //   stack: ["< React.js />   ", "< CSS3 />"],
  //   live: "https://rimshub.github.io/figma-design-to-reactjs/",
  //   source: "https://github.com/rimshub/figma-design-to-reactjs",
  //   description:  
  //       "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge. As a front-end developer, I was able to practice my React.js and CSS3 skills in this project.",
  // },  
   
];

const InprogressProjectsData = [
   
  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:  
        "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

// eslint-disable-next-line import/no-anonymous-default-export
export default {ProjectsData, InprogressProjectsData}