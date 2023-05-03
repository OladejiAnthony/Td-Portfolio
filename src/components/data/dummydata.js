import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube, LinkedIn, GitHub } from "@mui/icons-material"
//import ff from "../../../public/images/port/"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
 
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]

export const home = [
  {
    text: "HELLO I'M",
    name: "Anthony Tdwonder",
    post: "WEB DEVELOPER",
    design: "Frontend Developer",
    desc: "Frontend developer with tested experience in working with teams and companies to create and maintain a better code base for reusability. I'm passionate about learning and development with a desire to apply skills on larger development team. Eager to tackle more complex problems and continue to find ways to maximize user efficiency."
  },
]

export const about = [
  {
    desc: "I'm a Front End Engineer based in Nigeria ☀️. I am a passionate developer who loves coding, open source, and the web platform ❤️. Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. ",
    desc1: "In my free time you can find me longboarding 🛹 , at the gym 🏋️‍♂️, at the beach 🏖 or on tech meetups and conferences around Africa 🗺",
    cover: "./images/man.png",
  },
]

export const services = [
  {
    id: 1,
    icon: <Code />,
    title: "Clean Code",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Responsive Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Testing",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "SEO Best Practices",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 5,
    icon: <Settings />,
    title: "Optimizing User Experience",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Cross Browser Compatibility",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
]

export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "49",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "101",
    title: "PROJECTS COMPLETED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "70",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LINES OF CODE",
  },
]


export const portfolio = [
  {
    id: 1,
    cover: "FACEBOOK CLONE",
    text: "This is a Facebook App clone. Technologies used are : React + React Hook, React Context API, Material UI, Css Flexbox, Firebase’s Firestore realtime Db + Hosting + Firebase Google Authentication (Full Login)",
    name: "Social Media",
    category: "Social Media",
    title: "",
    link : "https://facebook-clone-87046.firebaseapp.com",
  },
  {
    id: 2,
    cover: "SLACK APP CLONE",
    text: "This is a Slack App clone. Technologies used are : React + React Hook, React Context API, Material UI, Css Flexbox, Firebase’s Firestore realtime Db + Hosting + Firebase Google Authentication (Full Login)",
    name: "Social Media",
    category: "Social Media",
    title: "",
    link : "https://slack-app-clone-331d3.firebaseapp.com/"
  },
  {
    id: 3,
    cover: "COVID TRACKER CLONE",
    text: "This is a Disney App clone. Technologies used are : React + React Hook, Material UI, Chart Js, Firebase Hosting",
    name: "Social Media",
    category: "Music App",
    title: "",
    link : "https://covid-tracker-58776.web.app/"
  },
  {
    id: 4,
    cover: "DISNEY APP CLONE",
    text: "This is a Disney App clone. Technologies used are : React + React Hook, Material UI, Styled Components, Firebase’s Firestore realtime Db + Hosting + Firebase Google Authentication",
    name: "Music",
    category: "Music App",
    title: "",
    link : "https://disney-clone-92ede.firebaseapp.com/"
  },
  {
    id: 5,
    cover: "SPOTIFY APP CLONE",
    text: "This is a Spotify App clone. Technologies used are : React + React Hook, React Context API, Material UI, Css Flexbox, Spotify web API, Firebase’s Firestore realtime Db + Hosting + Firebase Google Authentication (Full Login)",
    name: "Music",
    category: "Music App",
    title: "",
    link : "https://spotify-clone-app-10899.firebaseapp.com/"
  },
  
  
  {
    id: 6,
    cover: "APP CLONE",
    text: "",
    name: "Clone",
    category: "Production",
    title: "Brex Logo",
    link : ""
  },
  
]

export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
  },
]

export const blog = [
  {
    id: 1,
    title: "9 things every React.js beginner should know",
    date: "Jan 24, 2016",
    author: "Cam Jackson",
    links: "https://camjackson.net/post/9-things-every-reactjs-beginner-should-know",
    desc: "I've been using React.js for about 6 months now. In the grand scheme of things that's not very long at all, but in the ever-churning world of JavaScript frameworks,",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    links : "",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "Inside the mind of a frontend developer: Article layout",
    date: "Dec, 02 2022",
    author: "Ahmad Shadeed",
    links : "https://ishadeed.com/article/inside-frontend-developer-mind-article-layout/?ref=refind",
    desc: "Are you ready? Let’s deep dive into the mind of a frontend developer. From a quick look at the layout, I see that we have the following main elements:",
    cover: "./images/blog/b3.png",
  },
]

export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "21, Taiwo Road, Ilorin",
    text2: "Kwara State, Nigeria",
  },
  {
    icon: <PhoneIphone />,
    text1: "08137459380",
    text2: "08151516863",
  },
  {
    icon: <EmailOutlined />,
    text1: "oladejianthony98@gmail.com",
    text2: "oladejianthony4@gmail.com",
  },
]

export const social = [
  {
    icon: <GitHub />,
    link: "https://github.com/OladejiAnthony"
  },
  {
    icon: <LinkedIn />,
    link: "https://linkedin.com/in/oladejianthony"
  },
  {
    icon: <Twitter />,
    link: "https://twitter.com/OladejiAnthony1"
  },
  {
    icon: <YouTube />,
    link: ""
  },
  
  
]
