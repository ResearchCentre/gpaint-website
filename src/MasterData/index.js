import { Badge } from "@mui/icons-material";
import Images from "./image.js";

// Old API
export const URL =
  "https://h47diqy468.execute-api.ap-south-1.amazonaws.com/pre-production";
// New API
export const AUTH_BASE_URL =
  "https://gecl3c0ki5.execute-api.ap-south-1.amazonaws.com/dev";

export const AppName = "NeweboN";
export const subTitle = "UserCheck";

export const AppPrimaryColor = "#4124FF";
export const SecondaryColor = "#1F2024";

export const DarkModePrimaryColor = "#F5141F";
export const DarkModeText = "#ffff";
export const DarkModeBackground = "#09004A";
export const DarkModeBodyColor = "#454574";

export const AppTheme = "Light";
export const checkEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const specialcharater = /^[a-zA-Z0-9]+([^a-zA-Z0-9\-_]|$)[a-zA-Z0-9]*$/;

export const specialcharaterAllowSpace =
  /^[a-zA-Z0-9 ]+([^a-zA-Z0-9\-_ ]|$)[a-zA-Z0-9 ]*$/;

export const specialChacterwithbrakects = /^[a-zA-Z0-9 .()\[\]\-]*$/;

export const specialcharaterAllowsEmail = /^[a-zA-Z0-9 .()@\[\]\-]*$/;

export const validation_1 = /^[a-zA-Z0-9 -]*$/; // regular expression to allow only alphanumeric characters and spaces
export const validation_2 = /^[0-9]*$/; // regular expression to allow only numbers
export const primaryColor = "#1958a7";

const minRows = 3;

export const adjustTextareaHeight = (event) => {
  event.target.style.height = "auto"; // Reset the height to auto in order to recalculate it based on the content
  event.target.style.height = `${event.target.scrollHeight}px`; // Set the height to the scroll height of the content

  event.target.rows = minRows;
};

export const pages = [
  { label: "Home", path: "/", activeStatus: true },
  { label: "Report", path: "/report", activeStatus: true },
];

export const productList = [
  {
    value: 1,
    label: "HireTalent",
    activeStatus: false,
    img: Images.HIRE_TALENT,
    url : "https://dev.d17gy4jc01ptfj.amplifyapp.com/register",
    detailContent:
      "Hire talented and efficient candidates with the help of empowering students",
  },
  {
    value: 2,
    label: "ConnectTalent",
    activeStatus: false,
    img: Images.CONNECT_REWARD,
    url : "https://dev.d17gy4jc01ptfj.amplifyapp.com/register",
    detailContent:
      "Earn rewards by referring successful candidates to recruiters around you",
  },
  {
    value: 3,
    label: "GPaint",
    activeStatus: true,
    img: Images.WATCH_USER,
    url : "https://www.access.newebon.com/register?AppCode=3&ReferCode=null",
    detailContent:
      "Watch and record the presence of people under your organization",
  },
  {
    value: 4,
    label: "Check-In",
    activeStatus: true,
    img: Images.USER_CHECK,
    url : "https://www.access.newebon.com/register/?AppCode=4&ReferCode=null",
    detailContent:
      "Give your daily presence to your organization in a single click",
  },
];

export const userProfessionalDetail = [
  { label: "Company name", value: 'Add' },
  { label: "Company's location", value: 'Add' },
  { label: "Role", value: 'Add' },
]

export const howitworks_content = [
  {
    initalpara: "Welcome to GetHired, the platform that connects employers with students and rewards them for successful referrals. We'll walk you through the process of using GetHired."
  },
  {
    sno: "1",
    heading: "Browse for open positions",
    subpara: "Explore job listings from various employers to find opportunities that match your interests and skills."
  },
  {
    sno: "2",
    heading: "Refer Candidates",
    subList: [
      {
        points: "If you know someone who's a great fit for a job posting, refer them through the platform."
      }, {
        points: "You can share job listings via unique referral links or enter candidate details manually."
      }
    ]
  },
  {
    sno: "3",
    heading: "Track referral Progress",
    subList: [
      {
        points: "Monitor the status of your referrals and applications from your dashboard."
      }, {
        points: "Stay informed about interviews and hiring decisions."
      }
    ]
  },
  {
    sno: "4",
    heading: "Earn Rewards",
    subList: [
      {
        points: "When an employer hires a candidate you referred, you'll receive a referral reward."
      }, {
        points: "Your earnings will be credited to your account."
      }
    ]
  },
  {
    heading: "More features",
    subList: [{
      points: "Real-time Notifications: Stay updated with real-time notifications about application status, interview requests, and referral rewards."
    }, {
      points: "Privacy and Security: We prioritize your data security and privacy, ensuring a safe and secure platform for all users."
    }]
  }, {
    finalpara: "Join ConnectTalent today to get rewarded for your referrals. Whether you're an employer or a student, ConnectTalent is here to help to earn while you learn as a student like never before. Get started now and experience a smarter way to earn!"
  }
];



export const faq_card = [
  {
    title: 'What is UserCheck?',
    nav: true,
    stwich: false,
    link: ""
  },
  {
    title: 'Is UserCheck free or paid?',
    nav: true,
    stwich: false,
    link: ""
  },
  {
    title: 'Why I couldn’t see my workspace on scanning the location?',
    nav: true,
    stwich: false,
    link: ""
  },

]
// Please turn off for no banner as "false"
export const showBanner = false;

let productName = "NeweboN";

// Blog Data 
export const blogDataList = [
  {
    sno : 1,
    title: 'Maintaining reports of employees',
    date: "01/Jan/2024",
    showInfo: true,
    badgeName: "Reports Data",
    
    content: [
      {
        heading: "The Daily Grind Made Effortless",
        paragraph: "In the bustling world of offices and organizations, tracking employee attendance can be a daunting task. Traditional methods often involve manual record-keeping, leading to inaccuracies and a lot of paperwork. But fear not, because we've embraced technology to simplify the process. 1"
      },
      {
        heading: "Drawing the Boundaries of Efficiency",
        paragraph: "Imagine this: You can now effortlessly create boundaries on a map – be it the entire office premises, different departments, or even specific project locations. With a simple drag and draw feature, the boundaries are set. Now comes the magic."
      },
      {
        heading: "The Check-In App",
        paragraph: "Enter the Check-In app, the trusty sidekick of our live attendance platform. As employees arrive at work, they use the app to check in. But here's the catch – they can only do so if they are within the designated boundaries. No more check-ins from the coffee shop down the street or the comfort of their homes; it's all about being present where it matters."
      },
      {
        heading: "Empowering Managers with Real-Time Data",
        paragraph: "Imagine this: You can now effortlessly create boundaries on a map – be it the entire office premises, different departments, or even specific project locations. With a simple drag and draw feature, the boundaries are set. Now comes the magic."
      },
      {
        heading: "A Leap Towards Productivity",
        paragraph: "By maintaining these comprehensive reports, our platform empowers organizations to make informed decisions. Whether it's optimizing work schedules, assessing project timelines, or enhancing security measures, the data speaks volumes."
      },
      {
        heading: "Join the Revolution",
        paragraph: "As we reflect on the marvels of our live attendance platform, we invite you to join the revolution. Say goodbye to the hassles of manual attendance tracking and embrace a seamless, boundary-driven system that puts you in control."
      },
      {
        heading: "Ready to Transform Your Workforce Management?",
        paragraph: "If you're ready to transform how you manage employee attendance, the " + productName + " live attendance platform is your answer. Take the leap, draw the boundaries, and watch as your workforce thrives.        "
      },

    ]

  },
  {
    sno : 2,
    title: 'KPI of individual employee',
    date: "07/Nov/2023",
    showInfo: true,
    badgeName: "KPI for Employee",
    content: [
      {
        heading: "",
        paragraph: "Greetings, readers! Today, we're diving into the world of performance metrics and unlocking the true potential of your workforce. Join us as we explore the topic of KPIs of Individual Employees and discover how our live attendance platform takes this concept to a whole new level. 1",
      },
      {
        heading: "Setting the Stage: What Are KPIs?",
        paragraph: "Key Performance Indicators (KPIs) are the heartbeat of organizational success. They provide a clear picture of individual contributions and help gauge progress toward overarching goals. In the realm of employee performance, KPIs are the compass guiding the journey toward excellence"
      },
      {
        heading: "Record for Professional Growth",
        paragraph: "Picture this: Each employee has a unique set of skills, responsibilities, and aspirations. Our live attendance platform recognizes and celebrates this individuality by allowing organizations to maintain personalized records of  every team member, the time they checked in and out, their working hours etc…"
      },
      {
        heading: "Real-Time Insights, Real Results",
        paragraph: "Gone are the days of waiting for quarterly or annual reviews to assess performance. With our platform, real-time insights into individual KPIs are just a click away. Managers can track progress, identify areas for improvement, and provide timely feedback – fostering a culture of continuous growth and development.",
      },
      {
        heading: "Accountability Beyond Boundaries",
        paragraph: "The beauty of individual KPIs lies in their ability to transcend traditional boundaries. Our live attendance platform seamlessly integrates attendance data with their work record, offering a holistic view of an employee's commitment and contributions. It's not just about being present; it's about making a meaningful impact."
      },
      {
        heading: "Celebrating Achievements, Addressing Challenges",
        paragraph: "Success deserves recognition, and our platform makes it easy to celebrate achievements by consistently meeting attendance expectations, employees receive the acknowledgment they deserve. On the flip side, challenges can be addressed proactively, ensuring support is provided where it's needed most."
      },
      {
        heading: "",
        paragraph: "Some of you guys might think, how tracking their working hours will help in the growth of their organization. Well, this is the basic requirement to find how much the particular employee or the candidate is involved to work with the company. Because “A journey of a thousand miles begins with a single step”."
      },

     { 
      heading: "Elevate Your Workforce with " + productName + " ",
      paragraph: "Success deserves recognition, and our platform makes it easy to celebrate achievements by consistently meeting attendance expectations, employees receive the acknowledgment they deserve. On the flip side, challenges can be addressed proactively, ensuring support is provided where it's needed most."
     },

    {
      heading: "Ready to Redefine Performance Metrics?",
      paragraph: "If you're ready to redefine how you measure and enhance employee performance, our live attendance platform is here to lead the way. It's not just about tracking attendance; it's about shaping a future where every individual contributes meaningfully to the success of the whole"
    },

    ]

  },

  {
    sno : 3,
    title: 'Monitoring',
    date: "03/Sep/2023",
    showInfo: true,
    badgeName: "Check-In",
    content: [
      {
        heading: "",
        paragraph: "In the heart of the bustling city, where innovation and technology intersect, a groundbreaking solution was born at " + productName+ " - our revolutionary Boundary Monitoring feature. Let's dive into the narrative of how this feature has redefined the way we approach attendance tracking, fostering a more connected and efficient workforce.",
      },
      {
        heading: "The Rise of Remote Work",
        paragraph: "As the global workforce embraced the era of remote work, traditional attendance tracking faced unprecedented challenges. How could companies ensure accountability and productivity when employees were scattered across cities, or even on the go?"
      },

      {
        heading: "Enter Boundary Monitoring",
        paragraph: "Cue the entrance of our hero - Boundary Monitoring. Imagine being able to draw a virtual boundary on a map, whether it's your office building, a co-working space, or even a client's location. With this feature, higher officials can gain the ability to keep their finger on the pulse of attendance, ensuring that check-ins and check-outs only occur within the designated boundaries."
      },
      {
        heading: "The Check-In App: Your Trusty Sidekick",
        paragraph: "To make this magic happen, we introduced the Check-In App. As employees approached their workplace or any predefined boundary, they could seamlessly check in. The app ensured that they were physically present within the designated area before allowing the check-in, eliminating the possibility of attendance manipulation. No more worries about inaccuracies or disputes - a simple, yet powerful solution.",
      },
      {
        heading: "Boosting Accountability and Productivity",
        paragraph: "The impact was transformative. Companies experienced a surge in accountability, as employees recognized the importance of punctuality and adherence to work boundaries. Productivity soared, and the once daunting task of managing a remote workforce became a breeze."
      },
      {
        heading: "Join the Boundary Revolution",
        paragraph: "In a world where flexibility and remote work are the new norm, embracing technologies like Boundary Monitoring becomes a game-changer. It's not just about attendance; it's about fostering a culture of trust, accountability, and productivity."
      },
      {
        heading: "",
        paragraph: "So, are you ready to join the Boundary Revolution? Transform the way you track attendance, empower your workforce, and elevate your company to new heights."
      },


    ]

  },

  {
    sno : 4,
    title: 'Inaccurate location for check-in',
    date: "01/Jan/2-24",
    showInfo: false,
    badgeName: "LiveStream Data"

  },

  {
    sno : 5,
    title: 'Manual tracking',
    date: "01/Jan/2-24",
    showInfo: false,
    badgeName: "LiveStream Data"

  },

  {
    sno : 6,
    title: 'Cheating',
    date: "01/Jan/2-24",
    showInfo: false,
    badgeName: "LiveStream Data"

  },

  {
    sno : 7,
    title: 'Financial problems',
    date: "01/Jan/2-24",
    showInfo: false,
    badgeName: "LiveStream Data"

  },

  {
    sno : 8,
    title: 'Lack of company growth',
    date: "01/Jan/2-24",
    showInfo: false,
    badgeName: "LiveStream Data"

  },

  {
    sno : 9,
    title: 'Basic need of maintaining an organization: Attendance',
    date: "01/Jan/2-24",
    showInfo: false,
    badgeName: "LiveStream Data"

  },

  {
    sno : 10,
    title: 'Live attendance',
    date: "01/Jan/2-24",
    showInfo: false,
    badgeName: "LiveStream Data"

  },
]


