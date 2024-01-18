// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  color: "#663333",
  firstName: "João",
  middleName: "",
  lastName: "Lírio",
  message: " Software Engineer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/JoaoLirio",
    },
    
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/joaoliirio/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/joaolirio/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile_pic.jpg"),
  imageSize: 375,
  message:
    "My name is João Lírio. I graduated in 2023 with a masters degree in Computer Engineering from Faculdade de Engenharia da Universidade do Porto. My expertise encompasses software development. I love the challenge of solving complex problems and in my free time I like working on small projects. I'm constantly seeking opportunities for growth and innovation.",
  resume: "https://docs.google.com/document/d/1bCPzPWM6nMVkfzYvh9L3tQ1gI83GOFQt31BPbJfmGBY/edit",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "JoaoLirio",
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 80},
    { name: "JavaScript", value: 80 },
    { name: "C/C++", value: 75 },
    { name: "Python", value: 60 },
    { name: "SQL", value: 70 },
    { name: "React", value: 80 },
    { name: "HTML/CSS", value: 70 },
    { name: "C#", value: 60 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 80 },
    { name: "Problem Solving", value: 60 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 85 },
    { name: "Creativity", value: 65 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  phone:"(+351) 917868451",
  email: "joaopolirio@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',
      //companylogo: require('../assets/img/png'),
      date: 'Future - Future',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
