/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Weebo-Ary",
  title: "Hi all, I'm Aryan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀, Machine Learning Developer, UI/UX Designer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / MongoDB / Expressjs / Figma and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1PRLPuSEx2lmENFFrAvgeELjFwSG4ddkO/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/weebo-ary",
  linkedin: "https://www.linkedin.com/in/aryan-bhardwaj-7b0486176/",
  gmail: "aryan.bhardwaj1233@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / MySql Workbench"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "react native",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "next.js",
      fontAwesomeClassname: "fas fa-atom"
    },
    {
      skillName: "tailwind",
      fontAwesomeClassname: "fas fa-paint-brush"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lakshmi Narain College of Technology",
      logo: require("./assets/images/LNCT_Bhopal_Logo.png"),
      subHeader: "Bachelor's of Technology in Electronics & Communication",
      duration: "August 2019 - July 2023",
      desc: "Won Innovative Project Summit 2021 at L.N.C.T",
      descBullets: [
        "Published Research Paper at International Journal",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section  

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "StarCatalyst",
      companylogo: require("./assets/images/star_catalyst_logo.jpg"),
      date: "June 2021 – Present",
      desc: "Star Catalysts is a next-gen creative agency specialising in development. We're designers, developers, strategists, and awkward dancers.",
      descBullets: [
        "Working on API's and Database with MySql Workbench.",
        "Designed Mobile & Web Application with Frontend Skills.",
        "Worked on Node.js and other Backend Language."
      ]
    },
    {
      role: "Organizer & Project Mentor/Founder",
      company: "GirlScript Summer of Code 2021",
      companylogo: require("./assets/images/gssoc_logo.png"),
      date: "Jan 2021 – June 2021",
      desc: "GirlScript Summer of Code is the 3 month long Open Source program during summers conducted by GirlScript Foundation",
      descBullets: [
        "Founded the Project 'Desgen' which has 100+ forks and stars on Github",
        "Managing and handling the database Website for GSSOC'21",
        "Brainstorming ideas and developing features in website"
      ]
    },
    {
      role: "UI/UX Developer",
      company: "Borrwio",
      companylogo: require("./assets/images/borrowio_logo.jpg"),
      date: "Jan 2021– Feb 2021",
      desc: "Borrowio is a payday loan app platform that provides personal loans to college students. The borrowing limit will keep increasing over time if you make timely loan repayments.",
      descBullets: [
        "Planned and implemented new designs Made a design of a Chat App",
        "Created Prototypes for more than 70 screens",
        "Made the design with some latest and trending format"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/femesta_logo.svg"),
      projectName: "FEMBLE",
      projectDesc: "Get your personal Mentorship without any Formalities",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://femesta.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "AMBULA",
      projectDesc: "Ambula allows users to book Ambulances.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ambula.netlify.app/"
        }
      ]
    },
    {
      projectName: "Facebook Clone",
      projectDesc:
        "It is a Facebook clone web application made with M.E.R.N, Next.js, Tailwind CSS .",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/weebo-ary/facebook-app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Exercise Tracker",
      projectDesc:
        "It is a Exercise and Working CRUD Application made with MERN Stack.",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/weebo-ary/Exe-Tracker"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Care+",
      projectDesc:
        "Careplus is a interactive application which caters the 'Emotional Wellness and Mental Health'.",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/weebo-ary/Careplus"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "FoXLearn",
      projectDesc:
        "The role and the possibility of virtual practical teaching using AR -VR template ",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/weebo-ary/FoxLearn"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AICTE Idea Lab",
      subtitle:
        "Winners of First Ever Innovative Project Summit Conducted by AICTE in our College in 2021 ",
      image: require("./assets/images/aicte_logo.png"),
      footerLink: [
        {
          name: "Winning Poster",
          url: "https://drive.google.com/file/d/15H3JhxWdySw-ExIQ0L8xxwgG-B1Gz06d/view?usp=sharing"
        },
        {
          name: "Award Certification",
          url: "https://drive.google.com/file/d/15nrPYqgAatfiCeGVjcaB5LyZrNO5wArT/view?usp=sharing"
        }
      ]
    },
    {
      title: "GirlScript Foundation",
      subtitle:
        "Winners @Skill-a-thon, Skill-A-Thon is the biggest UPSKILLING program for job seekers and future entrepreneurs",
      image: require("./assets/images/girlscript_img.png"),
      footerLink: [
        {
          name: "Winning Poster",
          url: "https://drive.google.com/file/d/1m3rOw0nS6eBRkPUkgYRmtd_Zg7TAmdLL/view?usp=sharing"
        }
      ]
    },

    {
      title: "E-Hacks 2021",
      subtitle:
        "Got 2nd position at E-Hacks 2021 (Track : Designing) which is organized by @VIT-Vellore. ",
      image: require("./assets/images/e_cell_vit.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Q9awW0Z1hBBMmn1gUv6eXSLH8sys1OjU/view?usp=sharing"
        }
      ]
    },
    {
      title: "D.P. & T.O. Specialist",
      subtitle:
        "A data processing specialist works with databases & technical operations specialist manages and optimize the workflow and day-to-day activities of a particular business",
      image: require("./assets/images/aspiring_minds.png"),
      footerLink: [
        {
          name: "Certification T.O.",
          url: "https://drive.google.com/file/d/1AkkM2rV7POC4kNQJ007JRqZshrlxQqp4/view?usp=drivesdk"
        },
        {
          name: "Certification D.P.",
          url: "https://drive.google.com/file/d/1AzXBMz36ygd6M_Lh3vQ0XYx5eTUKD1RY/view?usp=drivesdk"
        }
      ]
    },
    {
      title: "GirlScript Summer of Code 2021",
      subtitle:
        "GirlScript Summer of Code is the 3 month long Open Source program during summers conducted by GirlScript Foundation.",
      image: require("./assets/images/gssoc_logo.png"),
      footerLink: [
        {
          name: "LOR",
          url: "https://drive.google.com/file/d/1o4ib_ExoAAlbh1n2sHV8vlT3mgWptLeG/view?usp=sharing"
        },
        {
          name: "Organizer Certification",
          url: "https://drive.google.com/file/d/1k7uxHdAQPwcgodiazNeJIQO4xiiaTbY5/view?usp=sharing"
        },
        {
          name: "Mentor Certification",
          url: "https://drive.google.com/file/d/19PajZ15GWiESji0YZurfiQ9h1FwZ2KTA/view?usp=sharing"
        }
      ]
    },
    {
      title: "Borrwio",
      subtitle:
        "Borrowio is a payday loan app platform that provides personal loans to college students. The borrowing limit will keep increasing over time if you make timely loan repayments.",
      image: require("./assets/images/borrowio_logo.jpg"),
      footerLink: [
        {
          name: "Letter of Recommendation ",
          url: "https://drive.google.com/file/d/1ZyZhS2QqXvytGVSfdbTJ81EHZVKItcyl/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
};

// Talks Sections

const talkSection = {
};

// Podcast Section

const podcastSection = {
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project ? My Inbox is open for you.",
  number: "+91-7987999491", 
  email_address: "aryan.bhardwaj1233@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "AryanBh10538903", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
