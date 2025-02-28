import AttendanceImg from "../../../Assets/svg/homeImage.svg"
import GroupPeople from "../../../Assets/svg/group-people-working-team.svg"
import LoginSystem from "../../../Assets/svg/loginScreenImage.svg"


export const homePgContent = [
    {
        topSubTitle: "We help you",
        subtitleClass: "sub_title",
        title: "GPaint",
        headingStyle: "firstmain_heading",
        description: [{ para: "Software to help wide range of organizations from educational institutions to business corporations with our innovative solutions. Your journey to efficiency, precision begins here." }],
        btnLabel: "View in detail",
        button: true,
        secondContentImg: AttendanceImg,
        firstContentImg: "",
        imgClass: "first_att_img",
        ecllips: true
    },
    {
        headingStyle: "sec_main_heading",
        title: "In the world of challenges, we offer solution",
        description: [{ para: "NeweboN has a strong motive of providing better solutions for various problems exist around. In a world where challenges often seem insurmountable, we stand firm as your ally, ready to face adversity head-on. We believe that every obstacle is an opportunity for innovation. Here's why we are your go-to partner for solutions in the face of challenges." }],
        firstContentImg: GroupPeople,
        secondContentImg: "",
        button: false,
        imgClass: "grp_img"

    },
    {
        headingStyle: "sec_main_heading",
        bottomSubTitle: "Single account for multiple products",
        title: "Unified Account Access",
        description: [{ para: "Gone are the days of juggling multiple usernames and passwords. With Unified Account Access, you can streamline your digital life by managing all your services and platforms from a single, secure account. Whether you're accessing our hiring platform, live attendance system — it's all at your fingertips." }, { para: "Join us in embracing unity, efficiency, and a future where your online experience works harmoniously." }],
        secondContentImg: LoginSystem,
        firstContentImg: "",
        button: false,
        bottomSubtittleClass: "bottom_subtittle",
        imgClass: "system_account_img"
    },
];

export const exploreProduct = [
    {
        maintitle: "Explore our product",
        subTitle: "Be precised in attendance",
        para: "Live Attendance Platform is designed with innovative Boundary Check-In feature, which helps you draw boundaries of your organization for precised check-in and check-out",
        buttonLabel: "Get Started",
        navLink: "/",
        img: AttendanceImg
    }
];

export const subscriptionDetail = [{
    maintitle: "Subscription",
    para: "Join our live attendance platform today and enjoy the advantages of an exclusive subscription plan",
    amountdetails: [
        {
            heading: "Per User",
            para: "This is the total number of users who can check-in per day through Check-in App.",
            rate: "$3"
        },
        {
            heading: "Per Space",
            para: "This is the number of spaces you can create after subscription.",
            rate: "$27"
        }
    ],
    boldtext: "Subscription amount will be the sum of both space and total users count",
    paraheading: "Subscription period",
    paraLine: "1 month to 1 year",
    para1: "(This doesn’t include any charge. Users can choose any subscription period)",
    para2: "Auto-renewal applies for 1 month to 6 months of plan (Auto renewal can be done till a year completes, new subscription has to be done every year to start auto renewal again) The plan over 6 months of subscription has to be manually renewed."

}]

