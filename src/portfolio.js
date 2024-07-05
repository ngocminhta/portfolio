/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ngoc-Minh Ta's Portfolio",
  description:
    "A passionate individual who always thrives to create impact through the sexiness of data.",
  og: {
    title: "Ngoc-Minh Ta Portfolio",
    type: "website",
    url: "https://ngocminhta.id.vn",
  },
};

//Home Page
const greeting = {
  title: "Ngoc-Minh Ta",
  logo_name: "ngocminhta",
  nickname: "Data & AI Engineer",
  subTitle:
    "A passionate individual who always thrives to create impact through the sexiness of data.",
  resumeLink: "/static/media/NgocMinhTa_AcademicCV_Jun2024.06cd84af2b41213ccf31.pdf",
    //"https://drive.google.com/file/d/1xRpQ4chvr351Ya37bxJulW3BFTmSXEj0/view?usp=share_link",
  portfolio_repository: "https://github.com/ngocminhta/ngocminhta.github.io",
  githubProfile: "https://github.com/ngocminhta",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ngocminhta",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ngocminh-ta/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
/*   {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  }, */
  {
    name: "Gmail",
    link: "mailto:ngocminhta.nmt@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
/*   {
    name: "Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  }, */
  {
    name: "Facebook",
    link: "https://www.facebook.com/NgocMinhTa.NMT/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
/*   {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  }, */
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Develop simple models for various machine learning and statistical use cases",
        "⚡ Experience of working with Optimization projects",
        "⚡ Create dynamic report for data analysis and forecasting",
		"⚡ Have a little bit experience in big data storage and processing",
		"⚡ Carrying on a project about Large Language Model",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "skill-icons:pytorch-dark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
		{
          skillName: "Java",
          fontAwesomeClassname: "skill-icons:java-light",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
		{
          skillName: "Transact-SQL",
          fontAwesomeClassname: "tabler:sql",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
		{
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            backgroundColor: "transparent",
            //color: "#D00000",
          },
        },
		{
          skillName: "R",
          fontAwesomeClassname: "mdi:language-r",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
		{
          skillName: "PowerBI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
		{
          skillName: "Apache Spark",
          fontAwesomeClassname: "devicon:apachespark-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
		{
          skillName: "Scala",
          fontAwesomeClassname: "skill-icons:scala-dark",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
      ],
    },
	{
      title: "Desktop Application Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building some simple application using Winform and WPF",
		"⚡ Have experience with Java desktop application",
/*         "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask", */
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "nonicons:c-sharp-16",
          style: {
            color: "#E34F26",
          },
        },
		{
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            backgroundColor: "transparent",
            //color: "#D00000",
          },
        },
		{
          skillName: "Java",
          fontAwesomeClassname: "skill-icons:java-light",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    /* {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    }, */
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
/*     {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    }, */
  ],
};

const degrees = {
  degrees: [
    {
      title: "Hanoi University of Science and Technology",
      subtitle: "BSc, Data Science and Artificial Intelligence",
      logo_path: "bk_logo.jpg",
      alt_name: "HUST",
      duration: "2021 - Now",
      descriptions: [
        "⚡ I have studied basic subjects like Data Science, Algorithms, AI, Machine Learning, OOP, etc., and I have done some mini-projects in these subjects, which always receive the grade greater or equal 9/10. I'm also a research student at the AI center.",
        "⚡ Apart from this, I have done courses on Data Science, Cloud Computing and Multitasking Optimization.",
        "⚡ I was selected for Student with Five Good Criteria which is given to top 1% of students in my university.",
		"⚡ I also got the certificate of merit from the university's president for my academic records and contributions to student's developments.",
      ],
      website_link: "http://hust.edu.vn/en/",
    },
  ],
};

const certifications = {
  certifications: [
    /* {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
	{
      title: "Google Professional Data Analytics",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/5G9L24X5GMC7",
      alt_name: "Google DA",
      color_code: "#FFFFFF",
    },
    {
      title: "Big Data & ML on GCP",
      subtitle: "- Google Cloud Skills Boost",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/906c35e8-9a36-4128-8992-31233911b3e1",
      alt_name: "GCP",
      color_code: "#FFFFFF",
    },
	{
      title: "Data Science in Business & Economics",
      subtitle: "- Foreign Trade University",
      logo_path: "ftu.png",
      certificate_link:
        "",
      alt_name: "FTU",
      color_code: "#FFFFFF",
    },
	{
      title: "IBM Data Engineering",
      subtitle: "- IBM",
      logo_path: "ibm.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/D8WYJ5PJNBSV",
      alt_name: "IBM DE",
      color_code: "#FFFFFF",
    },
	{
      title: "Strategic Technology Management",
      subtitle: "- University of Illinos at Urbana–Champaign",
      logo_path: "uiuc.png",
      certificate_link:	
		"https://www.coursera.org/account/accomplishments/specialization/C9DNF3KGGTFU",
      alt_name: "UIUC STM",
      color_code: "#FFFFFF",
    },
	{
      title: "IBM Data Science",
      subtitle: "- IBM",
      logo_path: "ibm.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/5G9L24X5GMC7",
      alt_name: "IBM DS",
      color_code: "#FFFFFF",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many projects as ML Developer, and Project manager. I have also worked several months with companies mostly as Data Analyst and now as Data Engineer and Scientist. \
	I love organizing events and that is why I am also involved with many open-source communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Works",
      experiences: [
		{
          title: "Data & AI Engineer",
          company: "Viettel Group",
          company_url: "https://viettel.com.vn/",
          logo_path: "viettel.png",
          duration: "July 2023 - now",
          location: "Hanoi, Vietnam",
          description: "I passed the talented internship program with the second best final project of IT Division, Viettel HQ. My current project is building LLM Assistant for Data Lakehouse.",
          color: "#000000",
        },
		{
          title: "Lecturer and Teaching Assistant",
          company: "Datapot JSC.",
          company_url: "https://datapot.vn/",
          logo_path: "datapot.png",
          duration: "July 2023 - now",
          location: "Hanoi, Vietnam",
          description: "I teach and assist courses about Python and SQL for Data Scientist and Data Analyst.",
          color: "#000000",
        },
		{
          title: "Research Student",
          company: "The International Reseach Center for AI - BK.AI",
          company_url: "https://bkai.ai/",
          logo_path: "bkai.png",
          duration: "Feb 2022 - Now",
          location: "Hanoi, Vietnam",
          description:
            "Currently, I am a member of Foundation Model Lab focusing developing Vietnamese large language model.\
			Prior to that, I was a member of Modeling, Simulation and Optimization Lab, which\
			focus on developing multitasking algorithms to solve problems in computer science and operation research.",
          color: "#0879bf",
        },
        {
          title: "Data Analyst",
          company: "Mathpresso Inc,",
          company_url: "https://mathpresso.com/",
          logo_path: "qanda.png",
          duration: "May 2022 - December 2022",
          location: "Hanoi, Vietnam (Hybrid)",
          description:
            "Data cleaning, and processing customers' data and input data for QANDA app. \
			Visualize and report about the effectiveness of marketing campaigns.\
			Feedback and recommend some updates of the websites, apps.",
          color: "#181717",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
		{
          title: "Data & AI Engineer Intern",
          company: "Viettel Inc.",
          company_url: "https://viettel.com.vn/",
          logo_path: "viettel.png",
          duration: "April 2023 - July 2023",
          location: "Hanoi, Vietnam",
          description: "I joined the Viettel Digital Talent program in the track of Data Engineering. \
		  I'm the only sophomore to be selected in this track. \
		  The final project for this program is researching about Data Mesh Architecture.",
          color: "#000000",
        },
        /* {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        }, */
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
		{
          title: "Google Developer Students Club Leader",
          company: "GDSC-HUST",
          company_url:
            "https://gdsc.vn",
          logo_path: "gdsc.png",
          duration: "July 2021 - Now",
          location: "Hanoi, Vietnam",
          description:
            "We have well established developer club in college which is directly associated with Google Developers.\
			We have developed many interdisciplinary projects under the membership of this club.\
			We have organized workshops and activities on Machine Learning, Computer Vision, Natural Language Processing, Flutter and React JS.",
          color: "#0C9D58",
        },
		{
          title: "Member of the Standing Commitee; Head of Study, Scientific Research and Orientation",
          company: "Ho Chi Minh's Youth Union",
          company_url: "https://soict.hust.edu.vn/",
          logo_path: "logoDoan.png",
          duration: "May 2022 - Now",
          location: "Hanoi, Vietnam",
          description:
            "We create campaigns and programs for student to help them get better study skills and engage them more in scientific research.\
			Also, we connect with companies and corporations to hold some workshops, events that provide them knowledge about practical skills and the requirements of companies.",
          color: "#D83B01",
        },
        /* {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        }, */
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /* {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },*/
  ], 
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ngocminhta.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Development and Data Analytics and Engineering.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Minh codes his life - A place for me to share everything about my life and my work.",
      //"For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://minhcodeshislife.vercel.app/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "B1-1002, BK.AI Center, Hanoi University of Science and Technology, 1 Dai Co Viet, Hai Ba Trung, Hanoi.",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/ttGu2AtPJnqNd3fNA",
  },
  phoneSection: {
    title: "Personal phone number",
    subtitle: "(+84) 942942968",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
